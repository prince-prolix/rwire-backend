import { isString } from "../api/utils/validation.js";
import { addMessage } from "../utils/helper-functions.js";
export const validateTypes = (requestParams) => {
  const { queryToSearch } = requestParams;
  let message = { value: "" };
  if (!isString(queryToSearch))
    addMessage(message, "queryToSearch must be a string");
  if (message.value.length === 0) message.value = "ok";
  return message.value;
};
