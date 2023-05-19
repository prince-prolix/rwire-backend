import { url } from "../../utils/constant.js";
import { getElasticQueryExportData } from "../../exportData/index.js";
import { getDataFromElasticScrollAPI } from "../database/db.js";
import { isSyntaxError, isValidField } from "../utils/validation.js";
import { badRequest, serverError } from "../utils/send-response.js";
import { validateTypes } from "../../exportData/validate.js";
/**
 * getExportData is a controller for "/export-data" route.
 * It returns one of the following things:
 * 1. Required parameters not given or datatype not matching :
 *    400 and bad request error message
 * 3. If it works, it fetches data from elasticsearch for
 *    given query and return it as response to client. It fetches
 *    documents in bulk. ( As of now 10000 records)
 */
export const getExportData = async (request, response) => {
  const {
    queryToSearch,
    includeFieldsOnResult = ["PN_B"],
    filters = [],
  } = request.body;
  const requestOptions = {
    queryToSearch,
    includeFieldsOnResult,
    filters,
  };
  if (!validateTypes(requestOptions)) {
    badRequest({ response });
    return;
  }
  let elasticQuery;
  try {
    elasticQuery = await getElasticQueryExportData(
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
  getDataFromElasticScrollAPI({ url: `${url}`, elasticQuery, response });
};
