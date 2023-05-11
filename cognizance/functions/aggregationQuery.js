import { checkFieldTypeKeywordBase } from "../../common/utils.js";

export const distinctAggQuery = (
    field1,
    field2,
    isMultiSeries,
    topNumber
  ) => {
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
