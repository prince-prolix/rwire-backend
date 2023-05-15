import { url } from "../../utils/constant.js";
import { getElasticQueryExportData } from "../../exportData/index.js";
import { getDataFromElastic } from "../database/db.js";
import { isSyntaxError, isValidField } from "../utils/validation.js";
export const getExportData = async (request, response) => {
  const {
    queryToSearch,
    includeFieldsOnResult = ["PN_B"],
    collapsebleField = "PN_B",
    filters = [],
  } = request.body;
  const requestOptions = {
    queryToSearch,
    includeFieldsOnResult,
    collapsebleField,
    filters,
  };
  if (!isValidField(queryToSearch)) {
    response.status(404).json({ message: "body must contain queryToSearch" });
    return;
  }
  let elasticQuery = await getElasticQueryExportData(
    queryToSearch,
    requestOptions
  );
  if (isSyntaxError(elasticQuery)) {
    response.status(400).json({ message: "syntax error" });
    return;
  }
  getDataFromElastic({ url: `${url}/_search`, elasticQuery, response });
};
