import { getCitationAndFamilyData } from "../resources/data/citation-and-family.js";
import { url, defaultHeaders } from "../utils/constant.js";
import peggy from "../parser/parser.js";
import { generateQuery } from "../common/generate-rec-query/index.js";
import { getElasticCountQuery } from "./query-count.js";
import { getIncludedData } from "../common/included-data.js";
import { queryProcess } from "../common/query-functions.js";
/**
 * getElasticCountQueryNumberSearchWithIncludes takes rawQuery and options.
 * It will generate selected CitationsOrFamilies from given selectedIncludes.
 * And using that selected CitationsOrFamilies, it generates an aggregation query
 * and append it to rawQuery. Then call getElasticCountQuery.
 */
export const getElasticCountQueryNumberSearchWithIncludes = async (
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
  return getElasticCountQuery(combineQuery, options);
};
