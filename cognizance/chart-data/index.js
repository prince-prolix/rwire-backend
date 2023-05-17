import { generateFilterKeysQuery } from "../../functions/chart-functions.js";
import { getElasticQuerySearch } from "../../search/index.js";
import { distinctAggQuery } from "../functions/aggregationQuery.js";
/**
 * getElasticQueryChartData takes queryToSearch and options.
 * It validate if given query has syntax error and handle it.
 * If given query is valid then it processes and parses it along with options,
 * generate and return final elastic query.
 */
export const getElasticQueryChartData = async (
  queryToSearch,
  requestOptions
) => {
  const { field1, field2, isMultiSeries, topNumber, chartFilters } =
    requestOptions;
  const aggs = distinctAggQuery(field1, field2, isMultiSeries, topNumber);
  let elasticQuery = await getElasticQuerySearch(queryToSearch, requestOptions);
  if (elasticQuery === "syntax error") {
    return elasticQuery;
  }
  let elasticQueryObj = JSON.parse(elasticQuery);
  const filterQuery = generateFilterKeysQuery(chartFilters);
  if (filterQuery.length > 0) {
    elasticQueryObj.query.bool.must
      ? elasticQueryObj.query.bool.must.push(...filterQuery)
      : (elasticQueryObj.query.bool["must"] = [...filterQuery]);
  }
  let queryObj = {
    query: elasticQueryObj.query,
    size: 0,
    ...aggs,
  };
  return JSON.stringify(queryObj);
};
