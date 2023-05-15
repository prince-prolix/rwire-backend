import { classesSearchUrl } from "../../utils/constant.js";
import { generateElasticQueryClassGenerator } from "../../class-generator/index.js";
import { getDataFromElastic } from "../database/db.js";
import { isValidField } from "../utils/validation.js";
export const getClassRecords = async (request, response) => {
  const { class: classes, keyword, types } = request.body;
  const queryValues = { classes, keyword, types };
  if (!isValidField(classes) && !isValidField(keyword)) {
    response
      .status(404)
      .json({ message: "body must contain class or keyword" });
    return;
  }
  const elasticQuery = await generateElasticQueryClassGenerator(queryValues);
  getDataFromElastic({
    url: `${classesSearchUrl}/_search`,
    elasticQuery,
    response,
  });
};
