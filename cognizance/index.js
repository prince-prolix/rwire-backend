import { generateQuery } from "../common/generate-rec-query/index.js";
import { queryProcess } from "../common/query-functions.js";
import peggy from "../parser/parser.js";
import { validationQuery } from "../smart-search/index.js";
import { distinctAggQuery } from "./functions/aggregationQuery.js";

export const getElasticQueryChartData = async (
  queryToSearch,
  requestOptions
) => {
  const { field1, field2, isMultiSeries, topNumber, dataSize } = requestOptions;
  const aggs = distinctAggQuery(field1, field2, isMultiSeries, topNumber);
  //   console.log("aggs",JSON.stringify(aggs));
  const isValidQuery = validationQuery(queryToSearch);
  if (!validationQuery(queryToSearch)) return "syntax error";
  const processedQuery = queryProcess(queryToSearch);
  const parser = peggy.parse(processedQuery);
  let dummyWindow = { origQuery: processedQuery };
  const elasticQuery = generateQuery(dummyWindow, parser);
  let queryObj = {
    query: elasticQuery,
    size: dataSize,
    ...aggs,
  };
//   console.log(JSON.stringify(queryObj));
  return JSON.stringify(queryObj);
};
