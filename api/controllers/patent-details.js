import { url } from "../../utils/constant.js";
import { getPatentDetailsQuery } from "../../patentDetials/index.js";
import { getDataFromElastic } from "../database/db.js";
export const getPatentDetails = async (request, response) => {
  const { queryToSearch } = request.body;
  if (!queryToSearch || queryToSearch === "") {
    response.status(404).json({ message: "body must contain queryToSearch" });
    return;
  }
  const elasticQuery = await getPatentDetailsQuery(queryToSearch);
  if (elasticQuery === "syntax error") {
    response.status(400).json({ message: "syntax error" });
    return;
  }
  getDataFromElastic({ url: `${url}/_search`, elasticQuery, response });
};
