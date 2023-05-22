import {
  isArray,
  isBoolean,
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
    field1,
    field2,
    isMultiSeries,
    topNumber,
  } = requestParams;
  let message = { value: "" };
  if (
    !isValidField(queryToSearch) ||
    !isValidField(field1) ||
    !isValidField(field2)
  ) {
    addMessage(message, "queryToSearch, filed1 and filed2 are required");
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
  if (!isString(field1)) addMessage(message, "field1 must be a string");
  if (!isString(field2)) addMessage(message, "field2 must be a string");
  if (!isBoolean(isMultiSeries))
    addMessage(message, "isMultiSeries must be a boolean");
  if (!isString(topNumber)) addMessage(message, "topNumber must be a string");
  if (message.value.length === 0) message.value = "ok";
  return message.value;
};
