import {
  isArray,
  isBoolean,
  isNumber,
  isString,
} from "../api/utils/validation.js";

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
  if (!isString(queryToSearch)) addMessage(message, "queryToSearch");
  if (!isBoolean(isNumberWithIncludeSearch))
    addMessage(message, "isNumberWithIncludeSearch");
  if (!isArray(selectedIncludes)) addMessage(message, "selectedIncludes");
  if (!isNumber(dataSize)) message += "dataSize, ";
  if (!isNumber(dataFrom)) message += "dataFrom, ";
  if (!isString(sortBy)) message += "sortBy, ";
  if (!isString(sortType)) message += "sortType, ";
  if (!isArray(includeFieldsOnResult))
    addMessage(message, "includeFieldsOnResult");
  if (!isString(collapsebleField)) addMessage(message, "collapsebleField");
  if (!isArray(filters)) addMessage(message, "filters");

  if (message.value.length === 0) message.value = "ok";
  return message.value;
};
