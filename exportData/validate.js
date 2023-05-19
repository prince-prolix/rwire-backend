import { isArray, isString } from "../api/utils/validation.js";

export const validateTypes = (requestParams) => {
  const { queryToSearch, includeFieldsOnResult, filters } = requestParams;
  let message = { value: "" };
  if (!isString(queryToSearch)) addMessage(message, "queryToSearch");
  if (!isArray(includeFieldsOnResult))
    addMessage(message, "includeFieldsOnResult");
  if (!isArray(filters)) addMessage(message, "filters");
  if (message.value.length === 0) message.value = "ok";
  return message.value;
};
