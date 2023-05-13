import { checkFieldTypeKeywordBase } from "../../common/utils.js";

export const getCitationAndFamilyData = (fields) => {
  let aggrArrayFields = {};

  fields.forEach((item) => {
    aggrArrayFields = {
      ...aggrArrayFields,
      [item]: {
        terms: {
          field: checkFieldTypeKeywordBase(item) ? item : `${item}.keyword`,
          order: { _count: "desc" },
          size: 65000,
        },
      },
    };
  });

  return aggrArrayFields;
};
