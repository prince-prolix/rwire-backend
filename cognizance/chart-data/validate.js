import {
  isArray,
  isBoolean,
  isNumber,
  isString,
} from "../../api/utils/validation.js";

export const validateTypes = (requestParams) => {
  const {
    queryToSearch,
    isNumberWithIncludeSearch,
    selectedIncludes,
    filters,
    chartFilters = [],
    field1,
    field2,
    isMultiSeries = false,
    topNumber = 10,
  } = requestParams;
  const isValidRequest =
    isString(queryToSearch) &&
    isBoolean(isNumberWithIncludeSearch) &&
    isArray(selectedIncludes) &&
    isArray(filters) &&
    isArray(chartFilters) &&
    isString(field1) &&
    isString(field2) &&
    isBoolean(isMultiSeries) &&
    isNumber(topNumber);
  return isValidRequest;
};
