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
