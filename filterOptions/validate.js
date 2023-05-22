import {
  isArray,
  isBoolean,
  isObject,
  isString,
  isValidField,
  isValidFilters,
} from "../api/utils/validation.js";
import { addMessage } from "../utils/helper-functions.js";

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
  let message = { value: "" };
  if (!isValidField(queryToSearch) || !isValidField(fields)) {
    addMessage(message, "queryToSearch and fields are required");
    return message.value;
  }
  if (!isString(queryToSearch))
    addMessage(message, "queryToSearch must be a string");
  if (!isBoolean(isNumberWithIncludeSearch))
    addMessage(message, "isNumberWithIncludeSearch must be a boolean");
  if (!isArray(selectedIncludes))
    addMessage(message, "selectedIncludes must be an array of string");
  if (!isArray(fields)) addMessage(message, "fields");
  if (!isObject(filtersSearchText)) addMessage(message, "filtersSearchText");
  if (!isString(collapsebleField)) addMessage(message, "collapsebleField");
  if (!isValidFilters(filters))
    addMessage(message, "filters' structure not valid");
  if (message.value.length === 0) message.value = "ok";
  return message.value;
};
