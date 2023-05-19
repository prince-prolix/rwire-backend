import {
  isArray,
  isBoolean,
  isNumber,
  isString,
} from "../api/utils/validation.js";

export const validateTypes = (requestParams) => {
  const { queryToSearch, filters } = requestParams;
  const isValidRequest = isString(queryToSearch) && isArray(filters);
  return isValidRequest;
};
