import { url } from "../../utils/constant.js";
import { getPatentDetailsQuery } from "../../patentDetials/index.js";
import { getDataFromElastic } from "../database/db.js";
import { isSyntaxError, isValidField } from "../utils/validation.js";
export const getPatentDetails = async (request, response) => {
  const { queryToSearch } = request.body;
  if (!isValidField(queryToSearch)) {
    response.status(404).json({ message: "body must contain queryToSearch" });
    return;
  }
  const elasticQuery = await getPatentDetailsQuery(queryToSearch);
  if (isSyntaxError(elasticQuery)) {
    response.status(400).json({ message: "syntax error" });
    return;
  }
  getDataFromElastic({ url: `${url}/_search`, elasticQuery, response });
};
