import { url } from "../../utils/constant.js";
import { getPatentDetailsQuery } from "../../patentDetials/index.js";
import { getDataFromElastic } from "../database/db.js";
import { isSyntaxError } from "../utils/validation.js";
import { badRequestError, serverError } from "../utils/send-response.js";
import { validateTypes } from "../../patentDetials/validate.js";
/**
 * getExportData is a controller for "/export-data" route.
 * It returns one of the following things:
 * 1. Required parameters not given or datatype not matching :
 *    400 and bad request error message
 * 2. If it works, it fetches data ( patent details ) from elasticsearch
 *    for given publication number and return it as response to client.
 */
export const getPatentDetails = async (request, response, next) => {
  const { queryToSearch } = request.body;
  const validMessage = validateTypes({ queryToSearch });
  if (validMessage !== "ok") {
    next(badRequestError({ response, message: validMessage }));
    return;
  }
  let elasticQuery;
  try {
    elasticQuery = await getPatentDetailsQuery(queryToSearch);
  } catch (err) {
    next(serverError({}));
    return;
  }
  if (isSyntaxError(elasticQuery)) {
    next(
      badRequestError({ response, message: "syntax error in queryToSearch" })
    );
    return;
  }
  getDataFromElastic({ url: `${url}/_search`, elasticQuery, response, next });
};
