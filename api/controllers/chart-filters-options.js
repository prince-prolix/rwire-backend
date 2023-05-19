import { url } from "../../utils/constant.js";
import { getElasticQueryChartFiltersOptions } from "../../cognizance/chart-filters-options/index.js";
import { getDataFromElastic } from "../database/db.js";
import { isSyntaxError } from "../utils/validation.js";
import { badRequest, serverError } from "../utils/send-response.js";
import { validateTypes } from "../../cognizance/chart-filters-options/validate.js";
/**
 * getChartFiltersOptions is a controller for "/chart-filters-options" route.
 * It returns one of the following things:
 * 1. Required parameters not given or datatype not matching :
 *    400 and bad request error message
 * 2. If it works, it fetches filters options for chart data from elasticsearch
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
  const validMessage = validateTypes(requestOptions);
  if (validMessage !== "ok") {
    badRequest({ response, message: validMessage });
    return;
  }
  let elasticQuery;
  try {
    elasticQuery = await getElasticQueryChartFiltersOptions(
      queryToSearch,
      requestOptions
    );
  } catch (err) {
    console.log(err);
    serverError({ response });
    return;
  }
  if (isSyntaxError(elasticQuery)) {
    badRequest({ message: "syntax error in queryToSearch", response });
    return;
  }
  getDataFromElastic({ url: `${url}/_search`, elasticQuery, response });
};
