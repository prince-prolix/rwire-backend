import { url } from "../../utils/constant.js";
import { getElasticQueryChartData } from "../../cognizance/chart-data/index.js";
import { getDataFromElastic } from "../database/db.js";
import { isSyntaxError } from "../utils/validation.js";
import { badRequest, serverError } from "../utils/send-response.js";
import { validateTypes } from "../../cognizance/chart-data/validate.js";
/**
 * getChartData is a controller for "/chart-data" route.
 * It returns one of the following things:
 * 1. Required parameters not given or datatype not matching :
 *    400 and bad request error message
 * 2. If it works, it fetches chart data from elasticsearch and
 * return it as response to client
 */
export const getChartData = async (request, response) => {
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
  if (!validateTypes(requestOptions)) {
    badRequest({ response });
    return;
  }
  let elasticQuery;
  try {
    elasticQuery = await getElasticQueryChartData(
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
