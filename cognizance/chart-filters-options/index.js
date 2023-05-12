
import { filterSearchAggInclude } from "../../common/data-functions.js";
import { generateFilterKeysQuery } from "../../functions/chart-functions.js";
import { getElasticQuerySmartSearch } from "../../smart-search/index.js";
import { aggregationData as selectFilterAggQuery } from "../functions/aggregationQuery.js";


export const getElasticQueryChartFiltersOptions = async (
  queryToSearch,
  requestOptions
) => {
  const { aggregationField, aggregationFilterSearchtext, aggregationSize ,dataSize,chartFilters} =
    requestOptions;
  let elasticQuery = await getElasticQuerySmartSearch(
    queryToSearch,
    requestOptions,
  );
  if (elasticQuery === "syntax error") {
    return elasticQuery;
  }
  let elasticQueryObj = JSON.parse(elasticQuery);
  const filterQuery = generateFilterKeysQuery(chartFilters);
  //  console.log("elasticQuery ",Object.keys(elasticQueryObj.query.bool))
  if (filterQuery.length > 0) {
          console.log("filterQuery ",filterQuery);
          // console.log('add chart filter',elasticQuery.query)
          elasticQueryObj.query.bool.must
            ? elasticQueryObj.query.bool.must.push(...filterQuery)
            : (elasticQueryObj.query.bool["must"] = [...filterQuery]);
        }
        let aggregationInclude=[];
        if(aggregationFilterSearchtext.length>0){
          aggregationInclude = filterSearchAggInclude(aggregationField, aggregationFilterSearchtext);
        }
  const aggregation = selectFilterAggQuery(
    aggregationField,
    aggregationInclude,
    aggregationSize
  );
  // console.log("elastic query ",JSON.stringify(JSON.parse(elasticQuery).query));

  let queryObj = {
    query:elasticQueryObj.query,
    size:dataSize,
    ...aggregation,
  };
//   console.log(JSON.stringify(queryObj));
  return JSON.stringify(queryObj);
};
