import { checkFieldTypeKeywordBase } from "../common/utils.js";

export const generateFilterKeysQuery = (filters) => {
  let filterQuery = [];
  filters.forEach((filter) => {
    const terms = [];
    // console.log("filter: ", filter);
    const key = Object.keys(filter)[0];
    const field = checkFieldTypeKeywordBase(key) ? key : `${key}.keyword`;
    // console.log("filter ", filter[key]);
    filter[key].forEach((i) => {
      // console.log(i);
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
    // console.log("terms ",terms);
    if (terms.length > 0) {
      filterQuery.push({
        bool: {
          should: terms,
        },
      });
    }
  });

  // eslint-disable-next-line array-callback-return

  return filterQuery;
};
