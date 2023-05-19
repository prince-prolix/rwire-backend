/**
 * isSyntaxError function returns one of the following things:
 * 1. true, if given string is equal to "syntax error"
 * 2. false, otherwise.
 */
export const isSyntaxError = (message) => {
  if (message === "syntax error") {
    return true;
  } else false;
};

/**
 * isValidField function returns one of the following things:
 * 1. true, if field has value.
 * 2. false, if field is undefined, null or empty
 */
export const isValidField = (field) => {
  if (!field) {
    return false;
  }
  return true;
};
export const isBoolean = (field) => {
  return typeof field === "boolean";
};
export const isNumber = (field) => {
  return typeof field === "number";
};
export const isString = (field) => {
  return typeof field === "string";
};
export const isArray = (field) => {
  return Array.isArray(field);
};
export const isObject = (field) => {
  return typeof field === "object";
};
