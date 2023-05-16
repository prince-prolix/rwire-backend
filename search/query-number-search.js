import { url, defaultHeaders } from "../utils/constant.js";
import { generateQuery } from "../common/generate-rec-query/index.js";
import { getIncludedData } from "../common/included-data.js";
import { queryProcess } from "../common/query-functions.js";
import peggy from "../parser/parser.js";
import { getCitationAndFamilyData } from "../resources/data/citation-and-family.js";
import { getElasticQuery } from "./query-search.js";

/**
 * getElasticQueryNumberSearchWithIncludes takes rawQuery and options.
 * If given reuqest has isNumberIncludedSerch true then this function
 * will be called. It will append an aggregation selected CitationsOrFamilies
 */
export const getElasticQueryNumberSearchWithIncludes = async (
  rawQuery,
  options = {}
) => {
  const parser = peggy.parse(rawQuery);
  let dummyWindow = { origQuery: rawQuery };
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
  const body = JSON.stringify(aggregationQuery);
  const method = "post";
  const rawResponse = await fetch(`${url}/_search`, {
    method,
    headers: defaultHeaders,
    body,
  });
  const dataAggregationResponse = await rawResponse.json();

  const includedData = getIncludedData(dataAggregationResponse);
  let newQueryString = "";

  if (includedData.length > 0) {
    newQueryString = queryProcess(`PN=(${includedData.join(" OR ")})`);
  }

  const combineQuery = newQueryString
    ? `${rawQuery} OR ${newQueryString}`
    : rawQuery;
  return getElasticQuery(combineQuery, options);
};
