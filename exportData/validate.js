import {
  isArray,
  isBoolean,
  isNumber,
  isString,
} from "../api/utils/validation.js";

export const validateTypes = (requestParams) => {
  const { queryToSearch, includeFieldsOnResult, filters } = requestParams;
  const isValidRequest =
    isString(queryToSearch) &&
    isArray(includeFieldsOnResult) &&
    isArray(filters);
  return isValidRequest;
};
