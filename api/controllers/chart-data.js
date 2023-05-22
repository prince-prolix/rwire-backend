import { url } from "../../utils/constant.js";
import { getElasticQueryChartData } from "../../cognizance/chart-data/index.js";
import { getDataFromElastic } from "../database/db.js";
import { isSyntaxError } from "../utils/validation.js";
import { badRequestError, serverError } from "../utils/send-response.js";
import { validateTypes } from "../../cognizance/chart-data/validate.js";
/**
 * getChartData is a controller for "/chart-data" route.
 * It returns one of the following things:
 * 1. Required parameters not given or datatype not matching :
 *    400 and bad request error message
 * 2. If it works, it fetches chart data from elasticsearch and
 * return it as response to client
 */
export const getChartData = async (request, response, next) => {
  const {
    queryToSearch,
    isNumberWithIncludeSearch = false,
    selectedIncludes = [],
    filters = [],
    chartFilters = [],
    field1,
    field2,
    isMultiSeries = false,
    topNumber = "10",
  } = request.body;

  const requestOptions = {
    queryToSearch,
    isNumberWithIncludeSearch,
    selectedIncludes,
    filters,
    chartFilters,
    field1,
    field2,
    isMultiSeries,
    topNumber,
  };
  const validMessage = validateTypes(requestOptions);
  if (validMessage !== "ok") {
    next(badRequestError({ response, message: validMessage }));
    return;
  }
  let elasticQuery;
  try {
    elasticQuery = await getElasticQueryChartData(
      queryToSearch,
      requestOptions
    );
  } catch (err) {
    next(serverError({}));
    return;
  }
  if (isSyntaxError(elasticQuery)) {
    next(badRequestError({ response, message: "syntax error in queryToSearch" }));;
    return;
  }
  getDataFromElastic({ url: `${url}/_search`, elasticQuery, response, next });
};
