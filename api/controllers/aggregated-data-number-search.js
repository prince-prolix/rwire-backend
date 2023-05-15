import { getAggregationDataNumberSearchQuery } from "../../aggregatedDataNumberSearch/index.js";
import { url } from "../../utils/constant.js";
import { getDataFromElastic } from "../database/db.js";
import { isSyntaxError, isValidField } from "../utils/validation.js";
export const getAggregationDataNumberSearch = async (request, response) => {
  const {
    queryToSearch,
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
    selectedIncludes: [],
    dataSize,
    dataFrom,
    sortBy,
    sortType,
    includeFieldsOnResult,
    collapsebleField,
    filters,
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
