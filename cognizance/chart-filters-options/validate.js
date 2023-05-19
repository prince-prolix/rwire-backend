import {
  isArray,
  isBoolean,
  isNumber,
  isString,
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
  if (!isString(queryToSearch)) addMessage(message, "queryToSearch");
  if (!isBoolean(isNumberWithIncludeSearch))
    addMessage(message, "isNumberWithIncludeSearch");
  if (!isArray(selectedIncludes)) addMessage(message, "selectedIncludes");
  if (!isArray(filters)) addMessage(message, "filters");
  if (!isArray(chartFilters)) addMessage(message, "chartFilters");
  if (!isString(aggregationField)) addMessage(message, "aggregationField");
  if (!isString(aggregationFilterSearchtext))
    addMessage(message, "aggregationFilterSearchtext");
  if (!isNumber(aggregationSize)) addMessage(message, "aggregationSize");
  if (message.value.length === 0) message.value = "ok";
  return message.value;
};
