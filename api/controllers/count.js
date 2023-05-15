import { url } from "../../utils/constant.js";
import { getFinalElasticCountQuery } from "../../count/index.js";
import { getDataFromElastic } from "../database/db.js";
import { isSyntaxError, isValidField } from "../utils/validation.js";
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
