import { getAggregationDataNumberSearchQuery } from "../../aggregatedDataNumberSearch/index.js";
import { url } from "../../utils/constant.js";
import { getDataFromElastic } from "../database/db.js";
import { badRequest, serverError } from "../utils/send-response.js";
import { isSyntaxError, isValidField } from "../utils/validation.js";
/**
 * getAggregationDataNumberSearch is a controller for
 * "/with-includes-number-search" route.
 * It returns one of the following things:
 * 1. Required parameters not given or datatype not matching :
 *    400 and bad request error message
 * 3. If it works, it fetches aggregated data from elasticsearch for given
 *    publication number and aggregation field such as BCP- backward citation
 *    and return it as response to client
 */
export const getAggregationDataNumberSearch = async (request, response) => {
  const { queryToSearch, selectedIncludes = [] } = request.body;
  if (!isValidField(queryToSearch)) {
    badRequest({ message: "body must contain queryToSearch", response });
    return;
  }
  const requestOptions = {
    queryToSearch,
    selectedIncludes,
  };
  let elasticQuery;
  try {
    elasticQuery = await getAggregationDataNumberSearchQuery(
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

  getDataFromElastic({ url: `${url}/_search`, elasticQuery, response });
};
