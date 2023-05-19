import { isArray, isString } from "../api/utils/validation.js";
import { addMessage } from "../utils/helper-functions.js";
export const validateTypes = (requestParams) => {
  const { queryToSearch, filters } = requestParams;
  let message = { value: "" };
  if (!isString(queryToSearch)) addMessage(message, "queryToSearch");
  if (!isArray(filters)) addMessage(message, "filters");
  if (message.value.length === 0) message.value = "ok";
  return message.value;
};
