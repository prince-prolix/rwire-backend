import { filterSearchAggInclude } from "../../common/data-functions.js";
import { generateFilterKeysQuery } from "../../functions/chart-functions.js";
import { getElasticQuerySearch } from "../../search/index.js";
import { aggregationData as selectFilterAggQuery } from "../functions/aggregationQuery.js";
/**
 * getElasticQueryChartFiltersOptions takes queryToSearch and options.
 * It validate if given query has syntax error and handle it.
 * If given query is valid then it processes and parses it along with options,
 * generate and return final elastic query.
 */
export const getElasticQueryChartFiltersOptions = async (
  queryToSearch,
  requestOptions
) => {
  const {
    aggregationField,
    aggregationFilterSearchtext,
    aggregationSize,
    chartFilters,
  } = requestOptions;
  let elasticQuery = await getElasticQuerySearch(queryToSearch, requestOptions);
  if (elasticQuery === "syntax error in queryToSearch") {
    return elasticQuery;
  }
  let elasticQueryObj = JSON.parse(elasticQuery);
  const filterQuery = generateFilterKeysQuery(chartFilters);
  if (filterQuery.length > 0) {
    elasticQueryObj.query.bool.must
      ? elasticQueryObj.query.bool.must.push(...filterQuery)
      : (elasticQueryObj.query.bool["must"] = [...filterQuery]);
  }
  let aggregationInclude = [];
  if (aggregationFilterSearchtext.length > 0) {
    aggregationInclude = filterSearchAggInclude(
      aggregationField,
      aggregationFilterSearchtext
    );
  }
  const aggregation = selectFilterAggQuery(
    aggregationField,
    aggregationInclude,
    aggregationSize
  );

  let queryObj = {
    query: elasticQueryObj.query,
    size: 0,
    ...aggregation,
  };
  return JSON.stringify(queryObj);
};
