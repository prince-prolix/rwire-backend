import { url } from "../../utils/constant.js";
import { getFinalElasticCountQuery } from "../../count/index.js";
import { getDataFromElastic } from "../database/db.js";
import { isSyntaxError } from "../utils/validation.js";
import { validateTypes } from "../../count/validate.js";
import { badRequest, serverError } from "../utils/send-response.js";

/**
 * getCount is a controller for "/count" route.
 * It returns one of the following things:
 * 1. Required parameters not given or datatype not matching :
 *    400 and bad request error message
 * 3. If it works, it fetches count ( number hits / documents ) from elasticsearch
 *    for given query and return it as response to client
 */
export const getCount = async (request, response) => {
  const { queryToSearch, filters = [] } = request.body;
  const requestOptions = { queryToSearch, filters };
  if (!validateTypes(requestOptions)) {
    badRequest({ response });
    return;
  }
  let elasticQuery;
  try {
    elasticQuery = await getFinalElasticCountQuery(
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
  getDataFromElastic({ url: `${url}/_count`, elasticQuery, response });
};
