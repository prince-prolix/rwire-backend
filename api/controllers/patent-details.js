import { url } from "../../utils/constant.js";
import { getPatentDetailsQuery } from "../../patentDetials/index.js";
import { getDataFromElastic } from "../database/db.js";
import { isSyntaxError, isValidField } from "../utils/validation.js";
/**
 * getExportData is a controller for "/export-data" route.
 * It returns one of the following things:
 * 1. queryToSearch not found : 404 and not found error message
 * 2. syantax error in query : 400 and bad request error message
 * 3. If it works, it fetches data ( patent details ) from elasticsearch
 *    for given publication number and return it as response to client.
 */
export const getPatentDetails = async (request, response) => {
  const { queryToSearch } = request.body;
  if (!isValidField(queryToSearch)) {
    response.status(404).json({ message: "body must contain queryToSearch" });
    return;
  }
  const elasticQuery = await getPatentDetailsQuery(queryToSearch);
  if (isSyntaxError(elasticQuery)) {
    response.status(400).json({ message: "syntax error" });
    return;
  }
  getDataFromElastic({ url: `${url}/_search`, elasticQuery, response });
};
