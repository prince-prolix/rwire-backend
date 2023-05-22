import {
  isArray,
  isBoolean,
  isNumber,
  isString,
  isValidField,
  isValidFilters,
} from "../../api/utils/validation.js";
import { addMessage } from "../../utils/helper-functions.js";

export const validateTypes = (requestParams) => {
  const {
    queryToSearch,
    isNumberWithIncludeSearch,
    selectedIncludes,
    filters,
    chartFilters,
    aggregationField,
    aggregationFilterSearchtext,
    aggregationSize,
  } = requestParams;
  let message = { value: "" };
  if (!isValidField(queryToSearch) || !isValidField(aggregationField)) {
    addMessage(message, "queryToSearch and aggregationField are required");
    return message.value;
  }
  if (!isString(queryToSearch))
    addMessage(message, "queryToSearch must be a string");
  if (!isBoolean(isNumberWithIncludeSearch))
    addMessage(message, "isNumberWithIncludeSearch must be a boolean");
  if (!isArray(selectedIncludes))
    addMessage(message, "selectedIncludes must be an array of string");
  if (!isValidFilters(filters))
    addMessage(message, "filters' structure not valid");
  if (!isValidFilters(chartFilters))
    addMessage(message, "chartFilters' structure not valid");
  if (!isString(aggregationField))
    addMessage(message, "aggregationField msut be a string");
  if (!isString(aggregationFilterSearchtext))
    addMessage(message, "aggregationFilterSearchtext must be a string");
  if (!isNumber(aggregationSize))
    addMessage(message, "aggregationSize must be a number");
  if (message.value.length === 0) message.value = "ok";
  return message.value;
};
