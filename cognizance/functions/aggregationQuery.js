import { checkFieldTypeKeywordBase } from "../../common/utils.js";

export const aggregationData = (field, include = [], size = 10) => {
  let hardBounds;

  if (include[0]) {
    hardBounds = {
      min: `${include[0]}`,
      max: `${include[include.length - 1] + 1}`,
    };
  }

  if (field === "ED") {
    return {
      aggs: {
        ED: {
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
        },
      },
    };
  }

  return {
    aggs: {
      [field]: {
        terms: {
          field: checkFieldTypeKeywordBase(field) ? field : `${field}.keyword`,
          order: {
            _count: "desc",
          },
          size,
          include: include.length > 0 ? include : undefined,
        },
      },
    },
  };
};
/**
 * distinctAggQuery takes field1, field2, isMultiSeries, topNumber.                                     mber.
 * It generates and return aggregation query which will be a part of
 * final elastic query.
 */
export const distinctAggQuery = (field1, field2, isMultiSeries, topNumber) => {
  let countryCountAgg = {};
  if (field1 === "PNC" || field1 === "PRC") {
    countryCountAgg = {
      publicationCountryCount: {
        filters: {
          filters: {
            EP: { match: { [field1]: "EP" } },
            WO: { match: { [field1]: "WO" } },
          },
        },
      },
    };
  }

  let letSecondFieldAgg = isMultiSeries
    ? {
        distinct: {
          terms: {
            field: checkFieldTypeKeywordBase(field2)
              ? field2
              : `${field2}.keyword`,
            size: 10,
            order: {
              _key: "desc",
            },
          },
        },
      }
    : {
        distinct: {
          cardinality: {
            field: checkFieldTypeKeywordBase(field2)
              ? field2
              : `${field2}.keyword`,
          },
        },
      };

  let tempCompositeQuery = {
    size: 0,
    aggs: {
      [field1]: {
        terms: {
          field: checkFieldTypeKeywordBase(field1)
            ? field1
            : `${field1}.keyword`,
          size: topNumber,
          order: { _count: "desc" },
        },
        aggregations: letSecondFieldAgg,
      },
      ...countryCountAgg,
    },
  };

  return tempCompositeQuery;
};
