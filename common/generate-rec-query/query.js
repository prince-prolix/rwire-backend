import { textFieldsList } from "../../common/field-map.js";
import { fieldTypeChecking } from "../../common/mapping.js";
import { date } from "../../common/category-wise-field-map.js";
import { searchableFieldList } from "../searchable-field-list.js";
import { getLeftTerm, getRightTerm } from "./terms.js";
export const boostFieldMap = {
  TI_EN: 4,
  TI: 4,
  AB_EN: 3,
  AB: 3,
  ICL_EN: 2,
  DCL_EN: 2,
  DESC: 1,
};

const searchWithStarFields = [
  "PN_B",
  "PN_D",
  "PN_DA",
  "PN_EPO",
  "PN_O",
  "PN_R",
  "PN_L",
  "PN_T",
  "AN_B",
  "AN_D",
  "AN_DA",
  "AN_EPO",
  "AN_O",
  "AN_R",
  "AN_L",
  "AN_T",
];

const operatorBaseOnFields = (field) => {
  const rawField = field.replace(">", "").replace("<", "");

  if (textFieldsList.includes(rawField)) {
    return "ADJ:";
  } else if (date.includes(rawField)) {
    throw new Error("Please check operators");
  }

  return "OR";
};

const isRangeQuery = (field) => {
  const isContainRangeChar = field.match(/(>|<)/);

  if (isContainRangeChar && isContainRangeChar.length > 0) {
    return true;
  }

  return false;
};

const isWildCard = (term) => {
  const matchString = typeof term === "string" ? term.match(/(\*|\?)/g) : [];

  if (matchString && matchString.length > 0) {
    return true;
  }

  return false;
};
export const _f = (data = []) => {
  const initialField = data.filter((element) => {
    return element && element !== "<implicit>";
  })[0];

  if (!initialField) {
    throw new Error("Please add field.");
  }

  return initialField.toLocaleUpperCase();
};
const _term = (field, term) => {
  return term.indexOf(" ") >= 0 || term.indexOf("-") >= 0
    ? "match_phrase"
    : fieldTypeChecking[field] && fieldTypeChecking[field].type === "keyword"
    ? "term"
    : "match";
};
const getFieldOperator = (relationalOperator) => {
  let relOp = "";

  switch (relationalOperator) {
    case ">=":
      relOp = "gte";
      break;

    case ">":
      relOp = "gt";
      break;

    case "<=":
      relOp = "lte";
      break;

    case "<":
      relOp = "lt";
      break;

    default:
      break;
  }

  return relOp;
};

const checkFiledIsValid = (field) => {
  if (!searchableFieldList.includes(field)) {
    throw new Error("Please check field");
  }
};

export const query = (dummyWindow, data, field, parent = {}, isCheckField) => {
  if (isCheckField) {
    checkFiledIsValid(field);
  }

  if (
    parent.operator &&
    field &&
    (field.split("_").includes("PN") || field.split("_").includes("AN")) &&
    (parent.operator.startsWith("ADJ") ||
      parent.operator.startsWith("NEAR") ||
      parent.operator.startsWith("SAME"))
  ) {
    return {};
  }

  if (searchWithStarFields.includes(field) && data.term) {
    data.term = `${data.term}*`;
  }

  if (parent.operator) {
    parent.operator = parent.operator.toLocaleUpperCase();
  }

  // verify data has left right and operator
  if (data.term) {
    var fieldData = field.replace("<", "").replace(">", "");
    if (
      fieldData === "PD" ||
      fieldData === "AD" ||
      fieldData === "EPRD" ||
      fieldData === "ED" ||
      fieldData === "NED" ||
      fieldData === "PFD" ||
      fieldData === "PPD" ||
      fieldData === "PRD"
    ) {
      if (data.term.length !== 8) {
        throw new Error("Please check date formate!!");
      }
    }

    if (["AND", "OR", "NOT"].includes(parent.operator)) {
      if (isWildCard(data.term)) {
        return {
          term: {
            wildcard: {
              [field]: {
                value: data.term,
                case_insensitive: true,
                boost: boostFieldMap[field],
              },
            },
          },
        };
      } else {
        const term = _term(field, data.term);
        const queryTermMatch = {
          [field]: term === "term" ? { value: data.term } : data.term,
        };

        if (term === "term") {
          queryTermMatch[field].case_insensitive = true;
        }

        if (term === "match" && boostFieldMap[field]) {
          queryTermMatch[field] = {
            query: data.term,
            boost: boostFieldMap[field],
          };
        }

        return {
          term: {
            [term]: queryTermMatch,
          },
        };
      }
    } else if (parent.operator) {
      if (isWildCard(data.term)) {
        return {
          term: {
            wildcard: {
              pattern: data.term,
            },
          },
        };
      } else {
        return {
          term: {
            match: {
              query: data.term,
            },
          },
        };
      }
    } else {
      if (isWildCard(data.term)) {
        if (!parent.right) {
          return {
            term: {
              wildcard: {
                [field]: {
                  value: data.term,
                  case_insensitive: true,
                },
              },
            },
          };
        } else {
          return {
            term: {
              wildcard: {
                pattern: data.term,
              },
            },
          };
        }
      } else {
        if (parent.fieldOp && isRangeQuery(parent.fieldOp)) {
          return {
            term: {
              range: {
                [field]: {
                  [getFieldOperator(parent.fieldOp)]: data.term
                    .replaceAll("-", "")
                    .replaceAll(" ", ""),
                },
              },
            },
          };
        } else {
          const term = _term(field, data.term);
          const x = {
            [field]: term === "term" ? { value: data.term } : data.term,
          };

          if (term === "term") {
            x[field].case_insensitive = true;
          }

          return {
            term: {
              [term]: x,
            },
          };
        }
      }
    }
  } else if (data.left && data.operator && data.right) {
    if (data.operator === "<implicit>") {
      data.operator = operatorBaseOnFields(field);

      let leftTerm = getLeftTerm(data.left);
      let rightTerm = getRightTerm(data.right);
      dummyWindow.origQuery =
        dummyWindow.origQuery &&
        dummyWindow.origQuery.replace(
          `${leftTerm} ${rightTerm}`,
          `${leftTerm} ${data.operator.replace(":", "")} ${rightTerm}`
        );
    }

    // process data in left first
    const left = query(
      dummyWindow,
      data.left,
      _f([data.left.field, data.field, field]),
      data,
      isCheckField
    );
    const right = query(
      dummyWindow,
      data.right,
      _f([data.right.field, data.field, field]),
      data,
      isCheckField
    );
    if (left.term && right.term) {
      return {
        terms: [left.term, right.term],
        operator: data.operator,
        field: field,
      };
    }

    if (
      (!data.field || data.field === right.field) &&
      (data.operator === right.operator || !right.operator) &&
      right.terms &&
      left.term
    ) {
      right.terms.unshift(left.term);
      return {
        terms: right.terms,
        operator: data.operator,
        field: right.field,
      };
    }
    return {
      left,
      right,
      operator: data.operator,
      field: _f([data.field, field]),
    };
  } else if (!data.operator && !data.right) {
    return query(dummyWindow, data.left, field, data, isCheckField);
  }

  const newData = {};

  return newData;
};
