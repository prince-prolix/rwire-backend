import {
  isArray,
  isBoolean,
  isString,
  isValidField,
  isValidFilters,
} from "../api/utils/validation.js";
import { addMessage } from "../utils/helper-functions.js";

export const validateTypes = (requestParams) => {
  const { classes, keyword, types } = requestParams;
  let message = { value: "" };
  if (!isValidField(classes) && !isValidField(keyword)) {
    addMessage(message, "Request must contain class or keyword");
    return message.value;
  }
  if (!isString(classes)) addMessage(message, "class must be a string");
  if (!isString(keyword)) addMessage(message, "keyword must be a string");
  if (!isArray(types)) addMessage(message, "types must be an array of string");

  if (message.value.length === 0) message.value = "ok";
  return message.value;
};
