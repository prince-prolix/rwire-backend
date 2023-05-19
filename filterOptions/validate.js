import {
  isArray,
  isBoolean,
  isNumber,
  isObject,
  isString,
} from "../api/utils/validation.js";

export const validateTypes = (requestParams) => {
  const {
    queryToSearch,
    isNumberWithIncludeSearch,
    selectedIncludes,
    fields,
    filtersSearchText,
    collapsebleField,
    filters,
  } = requestParams;
  const isValidRequest =
    isString(queryToSearch) &&
    isBoolean(isNumberWithIncludeSearch) &&
    isArray(selectedIncludes) &&
    isArray(fields) &&
    isObject(filtersSearchText) &&
    isString(collapsebleField) &&
    isArray(filters);
  return isValidRequest;
};
