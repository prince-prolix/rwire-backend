import {
  isArray,
  isBoolean,
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
  let message = { value: "" };
  if (!isString(queryToSearch)) addMessage(message, "queryToSearch");
  if (!isBoolean(isNumberWithIncludeSearch))
    addMessage(message, "isNumberWithIncludeSearch");
  if (!isArray(selectedIncludes)) addMessage(message, "selectedIncludes");
  if (!isArray(fields)) addMessage(message, "fields");
  if (!isObject(filtersSearchText)) addMessage(message, "filtersSearchText");
  if (!isString(collapsebleField)) addMessage(message, "collapsebleField");
  if (!isArray(filters)) addMessage(message, "filters");
  if (message.value.length === 0) message.value = "ok";
  return message.value;
};
