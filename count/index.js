import { queryProcess, validationQuery } from "../common/query-functions.js";
import { getElasticCountQueryNumberSearchWithIncludes } from "./query-number-search.js";
import { getElasticCountQuery } from "./query-count.js";
/**
 * getFinalElasticCountQuery takes queryToSearch and options.
 * It validate if given query has syntax error and handle it.
 * If isNumberSearchIncludes is true then it calls
 * either getElasticCountQueryNumberSearchWithIncludes or
 * getElasticCountQuery.
 *
 */
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
    console.log(e.message);
    throw new Error("Something went wrong");
  }
};
