import { classesSearchUrl } from "../../utils/constant.js";
import { getElasticQueryClassGenerator } from "../../class-generator/index.js";
import { getDataFromElastic } from "../database/db.js";
import { isValidField } from "../utils/validation.js";
import { badRequest, serverError } from "../utils/send-response.js";
/**
 * getClassRecords is a controller for "/class" route.
 * It returns one of the following things:
 * 1. Required parameters not given or datatype not matching :
 *    400 and bad request error message
 * 2. If it works, it fetches data from elasticsearch by appllying search of
 *    given value on class and/or keyword field and return it as
 *    response to client
 */
export const getClassRecords = async (request, response) => {
  const { class: classes, keyword, types } = request.body;
  const queryValues = { classes, keyword, types };
  if (!isValidField(classes) && !isValidField(keyword)) {
    badRequest({ message: "body must contain class or keyword", response });
    return;
  }
  let elasticQuery;
  try {
    elasticQuery = await getElasticQueryClassGenerator(queryValues);
  } catch (err) {
    console.log(err);
    serverError({ response });
    return;
  }
  getDataFromElastic({
    url: `${classesSearchUrl}/_search`,
    elasticQuery,
    response,
  });
};
