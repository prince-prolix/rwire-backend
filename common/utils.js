import { fieldTypeChecking } from "../common/mapping.js";
export const checkFieldTypeKeywordBase = (field) => {
  return (
    fieldTypeChecking[field] &&
    (fieldTypeChecking[field].type === "keyword" ||
      fieldTypeChecking[field].type === "integer" ||
      fieldTypeChecking[field].type === "date")
  );
};
export const checkFieldTypeDateBase = (field) => {
  return (
    fieldTypeChecking[field].type === "integer" ||
    fieldTypeChecking[field].type === "date"
  );
};
