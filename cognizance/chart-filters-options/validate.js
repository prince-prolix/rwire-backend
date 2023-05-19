import {
  isArray,
  isBoolean,
  isNumber,
  isString,
} from "../../api/utils/validation.js";

export const validateTypes = (requestParams) => {
  const {
    queryToSearch,
    isNumberWithIncludeSearch = false,
    selectedIncludes = [],
    filters = [],
    chartFilters = [],
    aggregationField,
    aggregationFilterSearchtext = "",
    aggregationSize = 10,
  } = requestParams;
  const isValidRequest =
    isString(queryToSearch) &&
    isBoolean(isNumberWithIncludeSearch) &&
    isArray(selectedIncludes) &&
    isArray(filters) &&
    isArray(chartFilters) &&
    isString(aggregationField) &&
    isString(aggregationFilterSearchtext) &&
    isNumber(aggregationSize);
  return isValidRequest;
};
