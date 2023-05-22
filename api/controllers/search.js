import { url } from "../../utils/constant.js";
import { getElasticQuerySearch } from "../../search/index.js";
import { getDataFromElastic } from "../database/db.js";
import { isSyntaxError } from "../utils/validation.js";
import { badRequestError, serverError } from "../utils/send-response.js";
import { validateTypes } from "../../search/validate.js";
/**
 * getSearch is a controller for "/search" route.
 * It returns one of the following things:
 * 1. Required parameters not given or datatype not matching :
 *    400 and bad request error message
 * 2. If it works, it fetches data ( documents ) from elasticsearch
 *    for given query and return it as response to client
 */
export const getSearch = async (request, response, next) => {
  const {
    queryToSearch,
    isNumberWithIncludeSearch = false,
    selectedIncludes = [],
    dataSize = 10,
    dataFrom = 0,
    sortBy = "_score",
    sortType = "desc",
    includeFieldsOnResult = [],
    collapsebleField = "PN_B",
    filters = [],
  } = request.body;

  const requestOptions = {
    queryToSearch,
    isNumberWithIncludeSearch,
    selectedIncludes,
    dataSize,
    dataFrom,
    sortBy,
    sortType,
    includeFieldsOnResult,
    collapsebleField,
    filters,
  };
  const validMessage = validateTypes(requestOptions);
  if (validMessage !== "ok") {
    next(badRequestError({ response, message: validMessage }));
    return;
  }
  let elasticQuery;
  try {
    elasticQuery = await getElasticQuerySearch(queryToSearch, requestOptions);
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
