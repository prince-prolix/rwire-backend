import { queryProcess, validationQuery } from "../common/query-functions.js";
import { checkFieldTypeKeywordBase } from "../common/utils.js";
import peggy from "../parser/parser.js";
import { generateQuery } from "../common/generate-rec-query/index.js";
import { generateFilterKeysQuery } from "../functions/chart-functions.js";
import { getCitationAndFamilyData } from "../resources/data/citation-and-family.js";
import { url } from "../class-generator/constant.js";
import { headers } from "../api/controllers/rwire-controllers.js";
export const getElasticQuerySmartSearch = async (
  queryToSearch,
  options = {}
) => {
  const { isNumberWithIncludeSearch = false } = options;

  // console.log("prince querytosearch:"+queryToSearch)
  const isValidQuery = validationQuery(queryToSearch);

  if (!isValidQuery) return "syntax error";
  console.log("finalSearchQuery ", queryToSearch);
  const processedQuery = queryProcess(queryToSearch);
  // console.log("processedQuery: ",processedQuery);
  // console.log("processedQuery query :"+processedQuery);
  try {
    if (isNumberWithIncludeSearch) {
      return getElasticQueryNumberSearchWithIncludes(processedQuery, options);
    } else {
      // console.log(" prince processed Query: "+processedQuery);
      return getElasticQuery(processedQuery, options);
    }
  } catch (e) {
    throw new Error("Something went wrong");
  }
};

const getIncludedData = (data) => {
  const dataBuckets = data.aggregations || {};
  let dataArray = [];

  Object.values(dataBuckets).forEach((i) => {
    i.buckets.forEach((item) => {
      const patentNumber = item.key.replaceAll(" ", "").replaceAll("/", "");

      if (!dataArray.includes(patentNumber)) {
        dataArray.push(patentNumber);
      }
    });
  });
  console.log(dataArray);
  return dataArray;
};
const getElasticQueryNumberSearchWithIncludes = async (
  rawQuery,
  options = {}
) => {
  // console.log("rawQuery "+rawQuery);
  const parser = peggy.parse(rawQuery);
  let dummyWindow = { origQuery: rawQuery };
  const elasticQuery = generateQuery(dummyWindow, parser);
  const { selectedIncludes = [] } = options;

  const selectedCitationsOrFamilies =
    getCitationAndFamilyData(selectedIncludes);

  const aggregationQuery = {
    query: elasticQuery,
    size: 0,
    aggs: {
      ...selectedCitationsOrFamilies,
    },
  };
  const body = JSON.stringify(aggregationQuery);
  // console.log("body : ",body);
  // console.log("aggregationQuery: "+JSON.stringify(aggregationQuery));
  const method = "post";
  const rawResponse = await fetch(`${url}/_search`, { method, headers, body });
  const dataAggregationResponse = await rawResponse.json();
  // console.log(JSON.stringify(dataAggregationResponse));

  const includedData = getIncludedData(dataAggregationResponse);
  let newQueryString = "";

  if (includedData.length > 0) {
    newQueryString = queryProcess(`PN=(${includedData.join(" OR ")})`);
  }

  const combineQuery = newQueryString
    ? `${rawQuery} OR ${newQueryString}`
    : rawQuery;
  // console.log("combineQuery :"+combineQuery);
  return getElasticQuery(combineQuery, options);
};

export const getElasticQuery = (rawQuery, options = {}) => {
  let success = true;
  const {
    dataSize,
    dataFrom,
    sortBy,
    sortType,
    includeFieldsOnResult,
    collapsebleField,
    filters,
  } = options;
  const sample = generateFilterKeysQuery(filters);
  //  console.log("sample",sample);
  try {
    const parser = peggy.parse(rawQuery);
    let dummyWindow = { origQuery: rawQuery };
    const elasticQuery = generateQuery(dummyWindow, parser);

    let combineWithFilterElasticQuery = elasticQuery;

    if (sample.length > 0) {
      combineWithFilterElasticQuery = {
        bool: {
          must: [elasticQuery, ...sample],
        },
      };
    }

    const sortByValue =
      checkFieldTypeKeywordBase(sortBy) || sortBy === "_score"
        ? sortBy
        : `${sortBy}.keyword`;
    let queryObj = {
      query: combineWithFilterElasticQuery,
      size: dataSize,
      from: dataFrom,
      _source: includeFieldsOnResult,
      sort: [{ [sortByValue]: { order: sortType } }],
      aggs: getAggrigationNumbers(),
      collapse: {
        field: checkFieldTypeKeywordBase(collapsebleField)
          ? collapsebleField
          : `${collapsebleField}.keyword`,
      },
    };
    return JSON.stringify(queryObj);
  } catch (e) {
    console.log(e);
    success = false;
  }

  return success;
};
const aggrigationNumbersArray = [
  "PN_B",
  "AN_B",
  "MFID",
  "SFID",
  "CFID",
  "DFID",
  "EFID",
];
const getAggrigationNumbers = () => {
  let aggrArray = {};
  aggrigationNumbersArray.forEach((item) => {
    aggrArray = {
      ...aggrArray,
      [item]: {
        cardinality: {
          field: checkFieldTypeKeywordBase(item) ? item : `${item}.keyword`,
        },
      },
    };
  });

  return aggrArray;
};
