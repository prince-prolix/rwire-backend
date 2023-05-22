import {
  isArray,
  isString,
  isValidField,
  isValidFilters,
} from "../api/utils/validation.js";
import { addMessage } from "../utils/helper-functions.js";
export const validateTypes = (requestParams) => {
  const { queryToSearch, filters } = requestParams;
  let message = { value: "" };
  if (!isValidField(queryToSearch)) {
    addMessage(message, "queryToSearch is required");
    return message.value;
  }
  if (!isString(queryToSearch))
    addMessage(message, "queryToSearch must be a string");
  if (!isValidFilters(filters))
    addMessage(message, "filters' structure not valid");
  if (message.value.length === 0) message.value = "ok";
  return message.value;
};
