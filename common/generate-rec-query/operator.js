import { intervalTerms } from "./terms.js";
import {boostFieldMap} from "./query.js"
export const operator = (data) => {
    let lcond = [];
    let rcond = [];
    let terms = [];
    let term = data.term ? [data.term] : [];
    let xterms = data.terms ? data.terms : [];
    terms = [...term, ...xterms];
    if (data.left) {
      lcond = operator(data.left);
      terms.push(lcond);
    }
    if (data.right) {
      rcond = operator(data.right);
      terms.push(rcond);
    }
    if (data.operator === "AND") {
      return {
        bool: {
          must: terms,
        },
      };
    } else if (data.operator === "OR") {
      return {
        bool: {
          should: terms,
        },
      };
    } else if (data.operator === "NOT") {
      return {
        bool: {
          should: terms[0],
          must_not: terms.slice(1),
        },
      };
    } else if (data.operator && data.operator.startsWith("NEAR")) {
      const [, gap] = data.operator.split(":");
      return {
        intervals: {
          [data.field]: {
            all_of: {
              ordered: false,
              max_gaps: gap ? gap : 10,
              intervals: terms.map((term) => intervalTerms(term, data.field)),
            },
            boost: boostFieldMap[data.field],
          },
        },
      };
    } else if (data.operator && data.operator.startsWith("ADJ")) {
      const [, gap] = data.operator.split(":");

      return {
        intervals: {
          [data.field]: {
            all_of: {
              ordered: true,
              max_gaps: gap ? gap : 0,
              intervals: terms.map((term) => intervalTerms(term, data.field)),
            },
            boost: boostFieldMap[data.field],
          },
        },
      };
    } else if (data.operator && data.operator.startsWith("SAME")) {
      const [, gap] = data.operator.split(":");
      return {
        intervals: {
          [data.field]: {
            all_of: {
              ordered: false,
              max_gaps: gap ? gap : -1,
              intervals: terms.map((term) => intervalTerms(term, data.field)),
            },
            boost: boostFieldMap[data.field],
          },
        },
      };
    } else if (!data.operator) {
      return {
        bool: {
          should: terms,
        },
      };
    }
    return data;
  };
