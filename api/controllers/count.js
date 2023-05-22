import { url } from "../../utils/constant.js";
import { getFinalElasticCountQuery } from "../../count/index.js";
import { getDataFromElastic } from "../database/db.js";
import { isSyntaxError } from "../utils/validation.js";
import { validateTypes } from "../../count/validate.js";
import { badRequestError, serverError } from "../utils/send-response.js";

/**
 * getCount is a controller for "/count" route.
 * It returns one of the following things:
 * 1. Required parameters not given or datatype not matching :
 *    400 and bad request error message
 * 2. If it works, it fetches count ( number hits / documents ) from elasticsearch
 *    for given query and return it as response to client
 */
export const getCount = async (request, response, next) => {
  const { queryToSearch, filters = [] } = request.body;
  const requestOptions = { queryToSearch, filters };
  const validMessage = validateTypes(requestOptions);
  if (validMessage !== "ok") {
    next(badRequestError({ response, message: validMessage }));
    return;
  }
  let elasticQuery;
  try {
    elasticQuery = await getFinalElasticCountQuery(
      queryToSearch,
      requestOptions
    );
  } catch (err) {
        next(serverError({}));
    return;
  }
  if (isSyntaxError(elasticQuery)) {
    next(badRequestError({ response, message: "syntax error in queryToSearch" }));;
    return;
  }
  getDataFromElastic({ url: `${url}/_count`, elasticQuery, response, next });
};
