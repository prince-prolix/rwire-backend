import {operator} from "./operator.js";
import {query} from "./query.js"
import { _f } from "./query.js";
export const generateQuery = (dummyWindow,parsed, isCheckField = false) => {
    return operator(
      query(
        dummyWindow,
        parsed,
        _f([
          parsed && parsed.field,
          parsed && parsed.left && parsed.left.field,
          parsed && parsed.left && parsed.left.left && parsed.left.left.field,
          parsed &&
            parsed.left &&
            parsed.left.left &&
            parsed.left.left.left &&
            parsed.left.left.left.field,
          parsed &&
            parsed.left &&
            parsed.left.left &&
            parsed.left.left.left &&
            parsed.left.left.left.left &&
            parsed.left.left.left.left.field,
        ]),
        {},
        isCheckField
      )
    );
  };