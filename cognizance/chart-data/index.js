import { generateFilterKeysQuery } from "../../functions/chart-functions.js";
import { getElasticQuerySmartSearch } from "../../smart-search/index.js";
import { distinctAggQuery } from "../functions/aggregationQuery.js";

export const getElasticQueryChartData = async (
  queryToSearch,
  requestOptions
) => {
  const { field1, field2, isMultiSeries, topNumber, dataSize, chartFilters } =
    requestOptions;
  const aggs = distinctAggQuery(field1, field2, isMultiSeries, topNumber);
  //   console.log("aggs",JSON.stringify(aggs));
  let elasticQuery = await getElasticQuerySmartSearch(
    queryToSearch,
    requestOptions
  );
  if (elasticQuery === "syntax error") {
    return elasticQuery;
  }
  let elasticQueryObj = JSON.parse(elasticQuery);
  const filterQuery = generateFilterKeysQuery(chartFilters);
  //  console.log("elasticQuery ",Object.keys(elasticQueryObj.query.bool))
  if (filterQuery.length > 0) {
    console.log("filterQuery ", filterQuery);
    // console.log('add chart filter',elasticQuery.query)
    elasticQueryObj.query.bool.must
      ? elasticQueryObj.query.bool.must.push(...filterQuery)
      : (elasticQueryObj.query.bool["must"] = [...filterQuery]);
  }
  // console.log("elastic query ",elasticQuery);
  let queryObj = {
    query: elasticQueryObj.query,
    size: dataSize,
    ...aggs,
  };
  //   console.log(JSON.stringify(queryObj));
  return JSON.stringify(queryObj);
};
