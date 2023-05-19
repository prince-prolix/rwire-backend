import {
  isArray,
  isBoolean,
  isNumber,
  isString,
} from "../api/utils/validation.js";

export const validateTypes = (requestParams) => {
  const {
    queryToSearch,
    isNumberWithIncludeSearch,
    selectedIncludes,
    dataSize,
    dataFrom,
    sortBy,
    sortType,
    includeFieldsOnResult,
    collapsebleField,
    filters,
  } = requestParams;
  const isValidRequest =
    isString(queryToSearch) &&
    isBoolean(isNumberWithIncludeSearch) &&
    isArray(selectedIncludes) &&
    isNumber(dataSize) &&
    isNumber(dataFrom) &&
    isString(sortBy) &&
    isString(sortType) &&
    isArray(includeFieldsOnResult) &&
    isString(collapsebleField) &&
    isArray(filters);
  return isValidRequest;
};
