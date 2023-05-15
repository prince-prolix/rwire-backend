import { url } from "../../utils/constant.js";
import { getElasticQueryChartFiltersOptions } from "../../cognizance/chart-filters-options/index.js";
import { getDataFromElastic } from "../database/db.js";
import { isSyntaxError, isValidField } from "../utils/validation.js";
export const getChartFiltersOptions = async (request, response) => {
  const {
    queryToSearch,
    isNumberWithIncludeSearch = false,
    dataSize = 0,
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
    dataSize,
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
