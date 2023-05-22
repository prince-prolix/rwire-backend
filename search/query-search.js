import peggy from "../parser/parser.js";
import { generateQuery } from "../common/generate-rec-query/index.js";
import { generateFilterKeysQuery } from "../functions/chart-functions.js";
import { checkFieldTypeKeywordBase } from "../common/utils.js";
/**
 * getElasticQuery takes rawQuery and options.
 * It processes and parses it along with options,
 * generate and return final elastic query.
 */
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
    console.log(e.message);
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
export const getAggrigationNumbers = () => {
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
