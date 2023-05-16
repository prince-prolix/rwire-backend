import { url } from "../../utils/constant.js";
import { getFinalElasticCountQuery } from "../../count/index.js";
import { getDataFromElastic } from "../database/db.js";
import { isSyntaxError, isValidField } from "../utils/validation.js";
/**
 * getCount is a controller for "/count" route.
 * It returns one of the following things:
 * 1. queryToSearch not found : 404 and not found error message
 * 2. syantax error in query : 400 and bad request error message
 * 3. If it works, it fetches count ( number hits / documents ) from elasticsearch
 *    for given query and return it as response to client
 */
export const getCount = async (request, response) => {
  const { queryToSearch, filters = [] } = request.body;
  const requestOptions = { queryToSearch, filters };
  if (!isValidField(queryToSearch)) {
    response.status(404).json({ message: "body must contain queryToSearch" });
    return;
  }
  let elasticQuery = await getFinalElasticCountQuery(
    queryToSearch,
    requestOptions
  );
  if (isSyntaxError(elasticQuery)) {
    response.status(400).json({ message: "syntax error" });
    return;
  }
  getDataFromElastic({ url: `${url}/_count`, elasticQuery, response });
};
