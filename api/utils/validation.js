/**
 *
 * @param {string} message
 * @returns true, if given string is equal to "syntax error"
 * @return false, otherwise.
 */
export const isSyntaxError = (message) => {
  if (message === "syntax error") {
    return true;
  } else false;
};
/**
 * @param {string} field
 * @returns true, if field has value.
 * @returns false, if field is undefined, null or empty
 */
export const isValidField = (field) => {
  if (!field) {
    return false;
  }
  return true;
};
