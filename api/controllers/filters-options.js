import { url } from "../../utils/constant.js";
import { getElasticQueryFilterOptions } from "../../filterOptions/index.js";
import { getDataFromElastic } from "../database/db.js";
import { isSyntaxError, isValidField } from "../utils/validation.js";
export const getFilterOptions = async (request, response) => {
  const {
    queryToSearch,
    dataSize = 0,
    fields,
    filtersSearchText,
    collapsebleField,
    filters,
  } = request.body;
  if (!isValidField(queryToSearch)) {
    response.status(404).json({ message: "body must contain queryToSearch" });
    return;
  }
  const requestOptions = {
    queryToSearch,
    dataSize,
    fields,
    filtersSearchText,
    collapsebleField,
    filters,
  };
  let elasticQuery = await getElasticQueryFilterOptions(
    queryToSearch,
    requestOptions
  );
  if (isSyntaxError(elasticQuery)) {
    response.status(400).json({ message: "syntax error" });
    return;
  }
  getDataFromElastic({ url: `${url}/_search`, elasticQuery, response });
};
