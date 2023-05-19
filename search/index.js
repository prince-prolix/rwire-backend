import { queryProcess, validationQuery } from "../common/query-functions.js";
import { getElasticQueryNumberSearchWithIncludes } from "./query-number-search.js";
import { getElasticQuery } from "./query-search.js";
/**
 * getElasticQuerySearch takes queryToSearch and options.
 * It validate if given query has syntax error and handle it.
 * If given query is valid then it processes and parses it along with options,
 * generate and return final elastic query.
 */
export const getElasticQuerySearch = async (queryToSearch, options = {}) => {
  const { isNumberWithIncludeSearch = false } = options;

  const isValidQuery = validationQuery(queryToSearch);

  if (!isValidQuery) return "syntax error";
  const processedQuery = queryProcess(queryToSearch);
  try {
    if (isNumberWithIncludeSearch) {
      return getElasticQueryNumberSearchWithIncludes(processedQuery, options);
    } else {
      return getElasticQuery(processedQuery, options);
    }
  } catch (e) {
    throw new Error("Something went wrong: " + e);
  }
};
