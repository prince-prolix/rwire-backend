import { filterSearchAggInclude } from "../../common/data-functions.js";
import { generateFilterKeysQuery } from "../../functions/chart-functions.js";
import { getElasticQuerySearch } from "../../search/index.js";
import { aggregationData as selectFilterAggQuery } from "../functions/aggregationQuery.js";

export const getElasticQueryChartFiltersOptions = async (
  queryToSearch,
  requestOptions
) => {
  const {
    aggregationField,
    aggregationFilterSearchtext,
    aggregationSize,
    dataSize,
    chartFilters,
  } = requestOptions;
  let elasticQuery = await getElasticQuerySearch(
    queryToSearch,
    requestOptions
  );
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
    size: dataSize,
    ...aggregation,
  };
  return JSON.stringify(queryObj);
};
