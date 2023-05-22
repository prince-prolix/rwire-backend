import { url } from "../../utils/constant.js";
import { getElasticQueryFilterOptions } from "../../filterOptions/index.js";
import { getDataFromElastic } from "../database/db.js";
import { isSyntaxError, isValidField } from "../utils/validation.js";
import { validateTypes } from "../../filterOptions/validate.js";
import { badRequestError, serverError } from "../utils/send-response.js";
/**
 * getFilterOptions is a controller for "/filters-options" route.
 * It returns one of the following things:
 * 1. Required parameters not given or datatype not matching :
 *    400 and bad request error message
 * 2. If it works, it fetches filters options from elasticsearch
 *    and return it as response to client
 */
export const getFilterOptions = async (request, response, next) => {
  const {
    queryToSearch,
    isNumberWithIncludeSearch = false,
    selectedIncludes = [],
    fields,
    filtersSearchText = {},
    collapsebleField = "PN_B",
    filters = [],
  } = request.body;

  const requestOptions = {
    queryToSearch,
    isNumberWithIncludeSearch,
    selectedIncludes,
    fields,
    filtersSearchText,
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
    elasticQuery = await getElasticQueryFilterOptions(
      queryToSearch,
      requestOptions
    );
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
