import { classesSearchUrl } from "../../utils/constant.js";
import { getElasticQueryClassGenerator } from "../../class-generator/index.js";
import { getDataFromElastic } from "../database/db.js";
import { isValidField } from "../utils/validation.js";
/**
 * getClassRecords is a controller for "/class" route.
 * It returns one of the following things:
 * 1. classes and keyword not found : 404 and not found error message
 * 2. If it works, it fetches data from elasticsearch by appllying search of
 *    given value on class and/or keyword field and return it as
 *    response to client
 */
export const getClassRecords = async (request, response) => {
  const { class: classes, keyword, types } = request.body;
  const queryValues = { classes, keyword, types };
  if (!isValidField(classes) && !isValidField(keyword)) {
    response
      .status(404)
      .json({ message: "body must contain class or keyword" });
    return;
  }
  const elasticQuery = await getElasticQueryClassGenerator(queryValues);
  getDataFromElastic({
    url: `${classesSearchUrl}/_search`,
    elasticQuery,
    response,
  });
};
