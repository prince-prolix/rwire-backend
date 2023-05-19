import { isString } from "../api/utils/validation.js";

export const validateTypes = (requestParams) => {
  const { queryToSearch } = requestParams;
  const isValidRequest = isString(queryToSearch);
  return isValidRequest;
};
