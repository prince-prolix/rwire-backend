import { url } from "../../utils/constant.js";
import { getElasticQueryExportData } from "../../exportData/index.js";
import { getDataFromElastic } from "../database/db.js";
import { isSyntaxError, isValidField } from "../utils/validation.js";
/**
 * getExportData is a controller for "/export-data" route.
 * It returns one of the following things:
 * 1. queryToSearch not found : 404 and not found error message
 * 2. syantax error in query : 400 and bad request error message
 * 3. If it works, it fetches data from elasticsearch for
 *    given query and return it as response to client. It fetches
 *    documents in bulk. ( As of now 10000 records)
 */
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
