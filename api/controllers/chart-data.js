import { url } from "../../utils/constant.js";
import { getElasticQueryChartData } from "../../cognizance/chart-data/index.js";
import { getDataFromElastic } from "../database/db.js";
export const getChartData = async (request, response) => {
  const {
    queryToSearch,
    isNumberWithIncludeSearch = false,
    dataSize = 0,
    filters = [],
    chartFilters = [],
    field1,
    field2,
    isMultiSeries = false,
    topNumber = 10,
  } = request.body;
  if (!queryToSearch || queryToSearch === "") {
    response.status(404).json({ message: "body must contain queryToSearch" });
    return;
  }
  const requestOptions = {
    queryToSearch,
    isNumberWithIncludeSearch,
    dataSize,
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
  if (elasticQuery === "syntax error") {
    response.status(400).json({ message: "syntax error" });
    return;
  }
  getDataFromElastic({ url: `${url}/_search`, elasticQuery, response });
};
