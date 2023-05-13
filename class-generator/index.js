import peggy from "../parser/parser.js";
import { generateQuery } from "../common/generate-rec-query/index.js";
const formatUserQueryInput = (inputValues) => {
  inputValues = inputValues.toLowerCase();
  let replaceCollection = [
    ["|", " OR "],
    [",", " OR "],
    [",", " OR "],
    [";", " OR "],
    ["or", " OR "],
    ["and", " AND "],
    ["*", ""],
  ];
  replaceCollection.forEach((replaceValue) => {
    inputValues = inputValues.replaceAll(replaceValue[0], replaceValue[1]);
  });

  let inputCollection = inputValues.split(" ");
  inputCollection = inputCollection.filter((tempInput) => tempInput.length > 0);
  inputCollection = inputCollection.map((tempInput) => {
    if (tempInput === "AND" || tempInput === "OR") {
      return tempInput;
    } else {
      return tempInput + "*";
    }
  });
  return inputCollection.join(" ");
};
const generateUserQuery = (values) => {
  // console.log(values.types);
  let userValues = structuredClone(values);

  let userQuery = "";
  if (userValues.classes) {
    let classCollection = formatUserQueryInput(userValues.classes);
    userQuery = `code=(${classCollection})`;
  }
  if (userValues.keyword) {
    userQuery += userQuery ? " AND " : "";
    let keywordCollection = formatUserQueryInput(userValues.keyword);
    userQuery += `definition=(${keywordCollection})`;
  }
  if (userValues.types && userValues.types.length > 0) {
    userQuery = `(${userQuery}) AND type=(`;
    userValues.types.forEach((type, index) => {
      userQuery += `${type}`;
      userQuery += index < userValues.types.length - 1 ? " OR " : ")";
    });
  }
  return userQuery;
};
export const generateElasticQueryClassGenerator = async (values) => {
  // console.log(values);
  let userQuery = generateUserQuery(values);
  // console.log(userQuery);
  const parser = peggy.parse(userQuery);
  let dummyWindow = { origQuery: userQuery };
  const elasticQuery = generateQuery(dummyWindow, parser);
  // console.log((JSON.stringify(elasticQuery)));
  const finalElasticQueryObj = { query: elasticQuery };
  const finalElasticQuery = JSON.stringify(finalElasticQueryObj).toLowerCase();
  // console.log("final elastric query "+finalElasticQuery);
  return finalElasticQuery;
};
