import { checkFieldTypeKeywordBase } from "../common/utils.js";
import { filterSearchAggInclude } from "../common/data-functions.js";
export const aggregate = (fields, filtersSearchText, collapsebleField) => {
  let temp = {};
  let subQuery = {
    aggsUniqueCount: {
      cardinality: {
        field: checkFieldTypeKeywordBase(collapsebleField)
          ? collapsebleField
          : `${collapsebleField}.keyword`,
      },
    },
  };

  fields.forEach((field) => {
    if (field === "ED") {
      let hardBounds;
      if (filtersSearchText.ED) {
        const filterSearch = filterSearchAggInclude(
          "ED",
          filtersSearchText.ED.toString()
        );
        if (filterSearch[0]) {
          hardBounds = {
            min: `${filterSearch[0]}`,
            max: `${filterSearch[filterSearch.length - 1] + 1}`,
          };
        }
      }
      let temp1 = {
        date_histogram: {
          min_doc_count: 1,
          hard_bounds: hardBounds,
          field: "ED",
          calendar_interval: "year",
          format: "yyyy",
          order: {
            _count: "desc",
          },
        },
      };
      temp = {
        ...temp,
        [field]: { ...temp1, aggs: subQuery },
      };
    } else {
      let temp1 = {
        terms: {
          field: checkFieldTypeKeywordBase(field) ? field : `${field}.keyword`,
          order: {
            _count: "desc",
          },
          size: 1000,
          include: filterSearchAggInclude(
            field,
            filtersSearchText[field] ? filtersSearchText[field] : ""
          ),
        },
      };
      temp = {
        ...temp,
        [field]: { ...temp1, aggs: subQuery },
      };
    }
  });
  return temp;
};
