import {
  isArray,
  isBoolean,
  isNumber,
  isString,
  isValidFilters,
} from "../api/utils/validation.js";
import { addMessage } from "../utils/helper-functions.js";

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
  let message = { value: "" };
  if (!isString(queryToSearch))
    addMessage(message, "queryToSearch must be a string");
  if (!isBoolean(isNumberWithIncludeSearch))
    addMessage(message, "isNumberWithIncludeSearch must be a boolean");
  if (!isArray(selectedIncludes))
    addMessage(message, "selectedIncludes must be an array of string");
  if (!isNumber(dataSize)) addMessage(message, "dataSize");
  if (!isNumber(dataFrom)) addMessage(message, "dataFrom");
  if (!isString(sortBy)) addMessage(message, "sortBy");
  if (!isString(sortType)) addMessage(message, "sortType");
  if (!isArray(includeFieldsOnResult))
    addMessage(message, "includeFieldsOnResult");
  if (!isString(collapsebleField)) addMessage(message, "collapsebleField");
  if (!isValidFilters(filters))
    addMessage(message, "filters' structure not valid");

  if (message.value.length === 0) message.value = "ok";
  return message.value;
};
