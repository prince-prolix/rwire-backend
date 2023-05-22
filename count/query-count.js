import peggy from "../parser/parser.js";
import { generateQuery } from "../common/generate-rec-query/index.js";
import { generateFilterKeysQuery } from "../functions/chart-functions.js";
/**
 * getElasticCountQuery takes rawQuery and options.
 * It processes and parses it along with options,
 * generate and return final elastic query.
 */
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
    console.log(e.message);
    success = false;
  }

  return success;
};
