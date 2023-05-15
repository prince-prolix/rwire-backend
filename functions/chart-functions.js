import { checkFieldTypeKeywordBase } from "../common/utils.js";

export const generateFilterKeysQuery = (filters) => {
  let filterQuery = [];
  filters.forEach((filter) => {
    const terms = [];
    const key = Object.keys(filter)[0];
    const field = checkFieldTypeKeywordBase(key) ? key : `${key}.keyword`;
    filter[key].forEach((i) => {
      if (key === "ED") {
        return terms.push({
          range: {
            ED: {
              gte: `${i}||/y`,
              lte: `${i}||/y`,
              format: "yyyy",
            },
          },
        });
      }

      return terms.push({
        term: {
          [field]: i,
        },
      });
    });
    if (terms.length > 0) {
      filterQuery.push({
        bool: {
          should: terms,
        },
      });
    }
  });
  return filterQuery;
};
