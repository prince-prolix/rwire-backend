import { url } from "../../utils/constant.js";
import { getElasticQueryChartData } from "../../cognizance/chart-data/index.js";
import { getDataFromElastic } from "../database/db.js";
import { isSyntaxError, isValidField } from "../utils/validation.js";
/**
 * getChartData is a controller for "/chart-data" route.
 * It returns one of the following things:
 * 1. queryToSearch/field1/field2 not found : 404 and not found error message
 * 2. syantax error in query : 400 and bad request error message
 * 3. If it works, it fetches chart data from elasticsearch and
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
    topNumber = 10,
  } = request.body;
  if (!isValidField(queryToSearch)) {
    response.status(404).json({ message: "body must contain queryToSearch" });
    return;
  }
  if (!isValidField(field1) || !isValidField(field2)) {
    response
      .status(404)
      .json({ message: "body must contain field1 and field2" });
    return;
  }
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

  let elasticQuery = await getElasticQueryChartData(
    queryToSearch,
    requestOptions
  );
  if (isSyntaxError(elasticQuery)) {
    response.status(400).json({ message: "syntax error" });
    return;
  }
  getDataFromElastic({ url: `${url}/_search`, elasticQuery, response });
};
