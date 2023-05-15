import { filterSearchAggInclude } from "../common/data-functions.js";
import { generateQuery } from "../common/generate-rec-query/index.js";
import { queryProcess, validationQuery } from "../common/query-functions.js";
import { checkFieldTypeKeywordBase } from "../common/utils.js";
import { generateFilterKeysQuery } from "../functions/chart-functions.js";
import peggy from "../parser/parser.js";

/**
 *  aa function sena mate che e
 * @param {
 * } queryToSearch
 * @param {*} options
 * @returns
 */

export const getElasticQueryFilterOptions = async (queryToSearch, options) => {
  const { fields, filtersSearchText, collapsebleField, filters } = options;

  const isValidQuery = validationQuery(queryToSearch);
  if (!isValidQuery) return "syntax error";
  const aggData = aggregate(fields, filtersSearchText, collapsebleField);
  const sample = generateFilterKeysQuery(filters);
  const processedQuery = queryProcess(queryToSearch);
  const parser = peggy.parse(processedQuery);
  let dummyWindow = { origQuery: processedQuery };
  const elasticQuery = generateQuery(dummyWindow, parser);

  let combineWithFilterElasticQuery = elasticQuery;

  if (sample.length > 0) {
    combineWithFilterElasticQuery = {
      bool: {
        must: [elasticQuery, ...sample],
      },
    };
  }

  const aggregationQuery = {
    query: combineWithFilterElasticQuery,
    size: 0,
    aggs: {
      ...aggData,
    },
    collapse: {
      field: checkFieldTypeKeywordBase(collapsebleField)
        ? collapsebleField
        : `${collapsebleField}.keyword`,
    },
  };
  return JSON.stringify(aggregationQuery);
};
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
  // eslint-disable-next-line array-callback-return
  fields.map((field) => {
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
