import { generateQuery } from "../common/generate-rec-query/index.js";
import { queryProcess, validationQuery } from "../common/query-functions.js";
import { checkFieldTypeKeywordBase } from "../common/utils.js";
import { generateFilterKeysQuery } from "../functions/chart-functions.js";
import peggy from "../parser/parser.js";
/**
 * getElasticQueryExportData takes queryToSearch and options.
 * It validate if given query has syntax error and handle it.
 * If given query is valid then it processes and parses it along with options,
 * generate and return final elastic query.
 */
export const getElasticQueryExportData = async (
  queryToSearch,
  options = {}
) => {
  const { filters, includeFieldsOnResult, collapsebleField } = options;
  const isValidQuery = validationQuery(queryToSearch);
  if (!isValidQuery) return "syntax error";
  const sample = generateFilterKeysQuery(filters);

  const processedQuery = queryProcess(queryToSearch);

  const parser = peggy.parse(processedQuery);
  let dummyWindow = { origQuery: processedQuery };
  const elasticQuery = generateQuery(dummyWindow, parser);

  let combineWithFilterElasticQuery = elasticQuery;

  if (sample.length > 0) {
    combineWithFilterElasticQuery = {
      bool: {
        must: [elasticQuery, ...sample],
      },
    };
  }
  const exportDataQuery = {
    query: elasticQuery,
    size: 500,
    _source: includeFieldsOnResult
  };
  return JSON.stringify(exportDataQuery);
};
