import { url } from "../../utils/constant.js";
import { getElasticQuerySearch } from "../../search/index.js";
import { getDataFromElastic } from "../database/db.js";
import { isSyntaxError, isValidField } from "../utils/validation.js";
/**
 * getSearch is a controller for "/search" route.
 * It returns one of the following things:
 * 1. queryToSearch not found : 404 and not found error message
 * 2. syantax error in query : 400 and bad request error message
 * 3. If it works, it fetches data ( documents ) from elasticsearch
 *    for given query and return it as response to client
 */
export const getSearch = async (request, response) => {
  const {
    queryToSearch,
    isNumberWithIncludeSearch = false,
    dataSize = 10,
    dataFrom = 0,
    sortBy = "_score",
    sortType = "desc",
    includeFieldsOnResult = [],
    collapsebleField = "PN_B",
    filters = [],
  } = request.body;
  if (!isValidField(queryToSearch)) {
    response.status(404).json({ message: "body must contain queryToSearch" });
    return;
  }
  const requestOptions = {
    queryToSearch,
    isNumberWithIncludeSearch,
    dataSize,
    dataFrom,
    sortBy,
    sortType,
    includeFieldsOnResult,
    collapsebleField,
    filters,
  };
  let elasticQuery = await getElasticQuerySearch(queryToSearch, requestOptions);
  if (isSyntaxError(elasticQuery)) {
    response.status(400).json({ message: "syntax error" });
    return;
  }
  getDataFromElastic({ url: `${url}/_search`, elasticQuery, response });
};
