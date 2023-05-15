import { url } from "../../utils/constant.js";
import { getElasticQueryChartFiltersOptions } from "../../cognizance/chart-filters-options/index.js";
import { getDataFromElastic } from "../database/db.js";
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
  if (queryToSearch === undefined || queryToSearch === "") {
    response.status(404).json({ message: "body must contain queryToSearch" });
    return;
  } else if (aggregationField === undefined) {
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
  if (elasticQuery === "syntax error") {
    response.status(400).json({ message: "syntax error" });
    return;
  }
  getDataFromElastic({ url: `${url}/_search`, elasticQuery, response });
};
