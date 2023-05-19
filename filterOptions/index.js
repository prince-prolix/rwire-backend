import { validationQuery } from "../common/query-functions.js";
import { checkFieldTypeKeywordBase } from "../common/utils.js";
import { getElasticQuerySearch } from "../search/index.js";
import { aggregate } from "./aggregate.js";

/**
 * getElasticQueryFilterOptions takes queryToSearch and options.
 * It validate if given query has syntax error and handle it.
 * If given query is valid then it processes and parses it along with options,
 * generate and return final elastic query.
 */

export const getElasticQueryFilterOptions = async (queryToSearch, options) => {
  const { fields, filtersSearchText, collapsebleField } = options;

  const isValidQuery = validationQuery(queryToSearch);
  if (!isValidQuery) return "syntax error";
  const aggData = aggregate(fields, filtersSearchText, collapsebleField);
  let elasticQuery = await getElasticQuerySearch(queryToSearch, options);
  if (elasticQuery === "syntax error") {
    return elasticQuery;
  }
  let elasticQueryObj = JSON.parse(elasticQuery);
  const aggregationQuery = {
    query: elasticQueryObj.query,
    size: 0,
    aggs: {
      ...aggData,
    },
    collapse: {
      field: checkFieldTypeKeywordBase(collapsebleField)
        ? collapsebleField
        : `${collapsebleField}.keyword`,
    },
  };
  return JSON.stringify(aggregationQuery);
};
