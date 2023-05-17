import { url } from "../../utils/constant.js";
import { getElasticQueryChartFiltersOptions } from "../../cognizance/chart-filters-options/index.js";
import { getDataFromElastic } from "../database/db.js";
import { isSyntaxError, isValidField } from "../utils/validation.js";
/**
 * getChartFiltersOptions is a controller for "/chart-filters-options" route.
 * It returns one of the following things:
 * 1. queryToSearch not found : 404 and not found error message
 * 2. syantax error in query : 400 and bad request error message
 * 3. If it works, it fetches filters options for chart data from elasticsearch
 *    and return it as response to client
 */
export const getChartFiltersOptions = async (request, response) => {
  const {
    queryToSearch,
    isNumberWithIncludeSearch = false,
    selectedIncludes = [],
    filters = [],
    chartFilters = [],
    aggregationField,
    aggregationFilterSearchtext = "",
    aggregationSize = 10,
  } = request.body;
  if (!isValidField(queryToSearch)) {
    response.status(404).json({ message: "body must contain queryToSearch" });
    return;
  } else if (!isValidField(aggregationField)) {
    response
      .status(404)
      .json({ message: "body must contain aggregation field" });
    return;
  }
  const requestOptions = {
    queryToSearch,
    isNumberWithIncludeSearch,
    selectedIncludes,
    filters,
    chartFilters,
    aggregationField,
    aggregationFilterSearchtext,
    aggregationSize,
  };
  let elasticQuery = await getElasticQueryChartFiltersOptions(
    queryToSearch,
    requestOptions
  );
  if (isSyntaxError(elasticQuery)) {
    response.status(400).json({ message: "syntax error" });
    return;
  }
  getDataFromElastic({ url: `${url}/_search`, elasticQuery, response });
};
