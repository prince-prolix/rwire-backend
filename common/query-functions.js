import peggy from "../parser/parser.js";
import { multipleFieldsShortCode } from "../resources/data/combine-field-list.js";
import { generateQuery } from "./generate-rec-query/index.js";

function balancedString(str) {
  var count = 0,
    i;
  var n = str.length;
  let finalString = "";

  for (i = 0; i < n; i++) {
    // check if opening bracket
    if (str[i] === "(") {
      finalString = finalString + str[i];
      count++;
    } else if (str[i] === ")" && count !== 0) {
      finalString = finalString + str[i];

      count--;
    } else if (str[i] !== ")") finalString = finalString + str[i];
  }

  if (count !== 0) for (i = 0; i < count; i++) finalString = finalString + ")";

  return finalString;
}
/**
 * validationQuery takes rawQuery as input.
 * If it can successfully parse it then it returns true
 * else false
 */
export const validationQuery = (rawQuery) => {
  try {
    checkSpecialConditions(rawQuery);
    const cleanedQuery = cleanQuery(rawQuery);
    const parser = peggy.parse(cleanedQuery);
    let dummyWindow = { origQuery: cleanedQuery };
    generateQuery(dummyWindow, parser, true);
    return true;
  } catch (e) {
    console.log("syntax error ", e.message);
    return false;
  }
};
/**
 *  cleanQuery takes query as input and replace speacial charachter
 *  with operator
 */
export const cleanQuery = (query) => {
  return query
    .replaceAll("|", "OR")
    .replaceAll("~", "NOT")
    .replaceAll("&", "AND")
    .replaceAll(",", " ")
    .replaceAll(":", "")
    .replaceAll(/\s+/g, " ")
    .trim();
};

export const checkSpecialConditions = (query) => {
  const matchData = query.match(
    new RegExp('(\\*\\?|\\?\\*|\\*\\*|"\\?|\\?"|\\*"|"\\*|\\*\\(|\\)\\*)'),
    "gi"
  );
  const matchConsicutiveQuestionMarks = query.match(
    new RegExp("(\\?{6,})", "gi")
  );

  if (matchData || matchConsicutiveQuestionMarks) {
    throw new Error("String not valid.");
  }
};

export const queryProcess = (query) => {
  let newQuery = "";

  //replace special character to operator
  newQuery = cleanQuery(query);

  checkSpecialConditions(newQuery);

  Object.keys(multipleFieldsShortCode).forEach((value) => {
    let regExp = new RegExp(
      "(?<=^|\\s|\\()\\s{0,}" +
        value +
        "\\s{0,}=(\\s{0,}.*?)(?=$|\\s(AND|OR|NOT)\\s\\({0,}\\w+\\>?\\s{0,}=)",
      "gmi"
    );
    let queryArray = [];
    let matchString = newQuery.match(regExp);

    if (matchString) {
      matchString.forEach((v, k) => {
        const replacableValue = balancedString(v);
        multipleFieldsShortCode[value].forEach((val) => {
          if (!queryArray[k]) {
            queryArray[k] = [];
          }

          queryArray[k].push(
            replacableValue.replace(new RegExp(value, "i"), val)
          );
        });
      });

      if (matchString.length > 1) {
        matchString.forEach((v, k) => {
          newQuery = newQuery.replace(
            balancedString(v),
            `(${queryArray[k].join(" OR ").trim()}) `
          );
        });
      } else {
        newQuery = newQuery.replace(
          balancedString(matchString[0]).trim(),
          `(${queryArray[0].join(" OR ").trim()}) `
        );
      }
    }
  });

  return newQuery;
};
