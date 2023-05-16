import { generateQuery } from "../common/generate-rec-query/index.js";
import { queryProcess, validationQuery } from "../common/query-functions.js";
import peggy from "../parser/parser.js";
import { getCitationAndFamilyData } from "../resources/data/citation-and-family.js";

/**
 * getAggregationDataNumberSearchQuery takes queryToSearch and options.
 * It validate if given query has syntax error and handle it.
 * If given query is valid then it processes and parses it along with options,
 * generate and return final elastic query.
 */
export const getAggregationDataNumberSearchQuery = (queryToSearch, options) => {
  const finalSearchQuery = queryToSearch;
  const isValidQuery = validationQuery(finalSearchQuery);

  if (!isValidQuery) return "syntax error";
  const processedQuery = queryProcess(finalSearchQuery);
  const parser = peggy.parse(processedQuery);
  let dummyWindow = { origQuery: processedQuery };
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
  return JSON.stringify(aggregationQuery);
};
