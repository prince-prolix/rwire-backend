import { queryProcess, validationQuery } from "../common/query-functions.js";
import peggy from "../parser/parser.js";
import { generateQuery } from "../common/generate-rec-query/index.js";
import { generateFilterKeysQuery } from "../functions/chart-functions.js";
import { getCitationAndFamilyData } from "../resources/data/citation-and-family.js";
import { url } from "../class-generator/constant.js";
import { headers } from "../api/controllers/rwire-controllers.js";
export const getFinalElasticCountQuery = async (
  queryToSearch,
  options = {}
) => {
  const { isNumberWithIncludeSearch = false } = options;
  const finalSearchQuery = queryToSearch;
  const isValidQuery = validationQuery(finalSearchQuery);

  if (!isValidQuery) return "syntax error";
  const processedQuery = queryProcess(finalSearchQuery);
  try {
    if (isNumberWithIncludeSearch) {
      return getElasticCountQueryNumberSearchWithIncludes(
        processedQuery,
        options
      );
    } else {
      return getElasticCountQuery(processedQuery, options);
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
  return dataArray;
};
const getElasticCountQueryNumberSearchWithIncludes = async (
  rawQuery,
  options = {}
) => {
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
  const method = "post";
  const rawResponse = await fetch(`${url}/_search`, { method, headers, body });
  const dataAggregationResponse = await rawResponse.json();

  const includedData = getIncludedData(dataAggregationResponse);
  let newQueryString = "";

  if (includedData.length > 0) {
    newQueryString = queryProcess(`PN=(${includedData.join(" OR ")})`);
  }

  const combineQuery = newQueryString
    ? `${rawQuery} OR ${newQueryString}`
    : rawQuery;
  return getElasticCountQuery(combineQuery, options);
};

export const getElasticCountQuery = (rawQuery, options = {}) => {
  let success = true;
  const { filters } = options;
  const sample = filters ? generateFilterKeysQuery(filters) : [];
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
    let queryObj = {
      query: combineWithFilterElasticQuery,
    };
    return JSON.stringify(queryObj);
  } catch (e) {
    console.log(e);
    success = false;
  }

  return success;
};
