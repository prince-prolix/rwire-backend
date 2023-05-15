import { generateFilterKeysQuery } from "../../functions/chart-functions.js";
import { getElasticQuerySearch } from "../../search/index.js";
import { distinctAggQuery } from "../functions/aggregationQuery.js";

export const getElasticQueryChartData = async (
  queryToSearch,
  requestOptions
) => {
  const { field1, field2, isMultiSeries, topNumber, dataSize, chartFilters } =
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
    size: dataSize,
    ...aggs,
  };
  return JSON.stringify(queryObj);
};
