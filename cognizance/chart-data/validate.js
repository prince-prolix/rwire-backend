import { isArray, isBoolean, isString } from "../../api/utils/validation.js";
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
  if (!isString(queryToSearch)) addMessage(message, "queryToSearch");
  if (!isBoolean(isNumberWithIncludeSearch))
    addMessage(message, "isNumberWithIncludeSearch");
  if (!isArray(selectedIncludes)) addMessage(message, "selectedIncludes");
  if (!isArray(filters)) addMessage(message, "filters");
  if (!isArray(chartFilters)) addMessage(message, "chartFilters");
  if (!isString(field1)) addMessage(message, "field1");
  if (!isString(field2)) addMessage(message, "field2");
  if (!isBoolean(isMultiSeries)) addMessage(message, "isMultiSeries");
  if (!isString(topNumber)) addMessage(message, "topNumber");
  if (message.value.length === 0) message.value = "ok";
  return message.value;
};
