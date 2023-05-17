import { getAggregationDataNumberSearchQuery } from "../../aggregatedDataNumberSearch/index.js";
import { url } from "../../utils/constant.js";
import { getDataFromElastic } from "../database/db.js";
import { isSyntaxError, isValidField } from "../utils/validation.js";
/**
 * getAggregationDataNumberSearch is a controller for
 * "/with-includes-number-search" route.
 * It returns one of the following things:
 * 1. queryToSearch not found : 404 and not found error message
 * 2. syantax error in query : 400 and bad request error message
 * 3. If it works, it fetches aggregated data from elasticsearch for given
 *    publication number and aggregation field such as BCP- backward citation
 *    and return it as response to client
 */
export const getAggregationDataNumberSearch = async (request, response) => {
  const {
    queryToSearch,
    selectedIncludes = []
  } = request.body;
  if (!isValidField(queryToSearch)) {
    response.status(404).json({ message: "body must contain queryToSearch" });
    return;
  }
  const requestOptions = {
    queryToSearch,
    selectedIncludes
  };
  const elasticQuery = getAggregationDataNumberSearchQuery(
    queryToSearch,
    requestOptions
  );
  if (isSyntaxError(elasticQuery)) {
    response.status(400).json({ message: "syntax error" });
    return;
  }

  getDataFromElastic({ url: `${url}/_search`, elasticQuery, response });
};
