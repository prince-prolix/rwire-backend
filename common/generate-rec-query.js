// import { textFieldsList } from "../class-generator/field-map.js";
// import { fieldTypeChecking } from "../class-generator/mapping.js";
// import { date } from "../class-generator/category-wise-field-map.js";
// import { searchableFieldList } from "../class-generator/searchable-field-list.js";

// const boostFieldMap = {
//   TI_EN: 4,
//   TI: 4,
//   AB_EN: 3,
//   AB: 3,
//   ICL_EN: 2,
//   DCL_EN: 2,
//   DESC: 1,
// };

// const searchWithStarFields = [
//   "PN_B",
//   "PN_D",
//   "PN_DA",
//   "PN_EPO",
//   "PN_O",
//   "PN_R",
//   "PN_L",
//   "PN_T",
//   "AN_B",
//   "AN_D",
//   "AN_DA",
//   "AN_EPO",
//   "AN_O",
//   "AN_R",
//   "AN_L",
//   "AN_T",
// ];

// const operatorBaseOnFields = (field) => {
//   console.log("operatorBaseOnFields");
//   const rawField = field.replace(">", "").replace("<", "");

//   if (textFieldsList.includes(rawField)) {
//     return "ADJ:";
//   } else if (date.includes(rawField)) {
//     throw new Error("Please check operators");
//   }

//   return "OR";
// };

// const getLeftTerm = (left) => {
//   if (left.term) {
//     return left.term;
//   } else {
//     getLeftTerm(left.left);
//   }
// };

// const getRightTerm = (right) => {
//   if (right.term) {
//     return right.term;
//   } else if (right.left.term) {
//     return right.left.term;
//   } else {
//     getRightTerm(right.left);
//   }
// };

// const spanTerms = (terms, field) => {
//   // console.log("terms>>>", terms);
//   if (terms.should) {
//     return {
//       span_or: {
//         clauses: spanShouldTerms(terms, field),
//       },
//     };
//   }

//   if (terms.must) {
//     return {
//       span_near: {
//         clauses: spanMustTerms(terms, field),
//       },
//     };
//   }

//   if (terms.match) {
//     return {
//       span_term: {
//         [field]: terms.match[field]
//           ? terms.match[field].query
//             ? terms.match[field].query
//             : terms.match[field]
//           : terms.match.query,
//       },
//     };
//   }

//   if (terms.wildcard) {
//     // return terms;
//     return {
//       span_multi: {
//         match: terms.wildcard.pattern
//           ? {
//               wildcard: {
//                 [field]: {
//                   value: terms.wildcard.pattern,
//                 },
//               },
//             }
//           : terms,
//       },
//     };
//   }

//   if (terms.bool) {
//     return spanTerms(terms.bool, field);
//   }

//   return terms;
// };

// const spanShouldTerms = (terms, field) => {
//   // console.log("terms==>>>", terms);
//   if (Array.isArray(terms.should)) {
//     return terms.should.map((term) => spanTerms(term, field));
//   } else {
//     return {
//       span_term: {
//         [field]: [terms.should],
//       },
//     };
//   }
// };

// const spanMustTerms = (terms, field) => {
//   // console.log("terms==>>>", terms);
//   if (Array.isArray(terms.must)) {
//     return terms.must.map((term) => spanTerms(term, field));
//   } else {
//     return {
//       span_near: {
//         clauses: {
//           span_term: {
//             [field]: [terms.must],
//           },
//         },
//       },
//     };
//   }
// };

// const intervalTerms = (terms, field) => {
//   if (terms.should) {
//     return intervalShouldTerms(terms, field);
//   }

//   if (terms.must) {
//     return intervalMustTerms(terms, field);
//   }

//   if (terms.intervals) {
//     return intervalIntervalsTerms(terms, field);
//   }

//   if (terms.must_not) {
//     return intervalMustNotTerms(terms, field);
//   }
//   if (terms.match) {
//     return {
//       match: {
//         query: terms.match[field]
//           ? terms.match[field].query
//             ? terms.match[field].query
//             : terms.match[field]
//           : terms.match.query,
//       },
//     };
//   }
//   if (terms.match_phrase) {
//     return {
//       match: {
//         query: terms.match_phrase[field]
//           ? terms.match_phrase[field]
//           : terms.match_phrase.query,
//       },
//     };
//   }
//   if (terms.wildcard) {
//     // return terms;
//     return {
//       wildcard: {
//         pattern: terms.wildcard[field]
//           ? terms.wildcard[field].value
//           : terms.wildcard.pattern,
//       },
//     };
//   }
//   if (terms.bool) {
//     return intervalTerms(terms.bool, field);
//   }
//   return terms;
// };

// const intervalIntervalsTerms = (terms, field) => {
//   if (terms.intervals[field]["all_of"]) {
//     return {
//       all_of: terms.intervals[field]["all_of"],
//     };
//   } else {
//     return {
//       any_of: terms.intervals[field]["any_of"],
//     };
//   }
// };

// const intervalShouldTerms = (terms, field) => {
//   if (Array.isArray(terms.should)) {
//     return {
//       any_of: {
//         intervals: terms.should.map((term) => intervalTerms(term, field)),
//       },
//     };
//   } else {
//     return {
//       any_of: [terms.should],
//     };
//   }
// };

// const intervalMustTerms = (terms, field) => {
//   return {
//     all_of: {
//       intervals: terms.must.map((term) => intervalTerms(term, field)),
//     },
//   };
// };

// const intervalMustNotTerms = (terms, field) => {
//   return {
//     filter: {
//       not_containing: terms.must_not.map((term) =>
//         intervalTerms(term, field)
//       )[0], //can we do multiple nots  ?
//     },
//   };
// };

// const isRangeQuery = (field) => {
//   const isContainRangeChar = field.match(/(>|<)/);

//   if (isContainRangeChar && isContainRangeChar.length > 0) {
//     return true;
//   }

//   return false;
// };

// const isWildCard = (term) => {
//   const matchString = typeof term === "string" ? term.match(/(\*|\?)/g) : [];

//   if (matchString && matchString.length > 0) {
//     return true;
//   }

//   return false;
// };
// const _f = (data = []) => {

//   const initialField = data.filter((element) => {
//     return element && element !== "<implicit>";
//   })[0];

//   if (!initialField) {
//     throw new Error("Please add field.");
//   }

//   return initialField.toLocaleUpperCase();
// };

// const _term = (field, term) => {
//   return term.indexOf(" ") >= 0 || term.indexOf("-") >= 0
//     ? "match_phrase"
//     : fieldTypeChecking[field] && fieldTypeChecking[field].type === "keyword"
//     ? "term"
//     : "match";
// };

// const getFieldOperator = (relationalOperator) => {
//   let relOp = "";

//   switch (relationalOperator) {
//     case ">=":
//       relOp = "gte";
//       break;

//     case ">":
//       relOp = "gt";
//       break;

//     case "<=":
//       relOp = "lte";
//       break;

//     case "<":
//       relOp = "lt";
//       break;

//     default:
//       break;
//   }

//   return relOp;
// };

// const checkFiledIsValid = (field) => {
//   if (!searchableFieldList.includes(field)) {

//     throw new Error("Please check field");
//   }
// };

// const query = (dummyWindow,data, field, parent = {}, isCheckField) => {
//   if (isCheckField) {
//     checkFiledIsValid(field);
//   }

//   if (
//     parent.operator &&
//     field &&
//     (field.split("_").includes("PN") || field.split("_").includes("AN")) &&
//     (parent.operator.startsWith("ADJ") ||
//       parent.operator.startsWith("NEAR") ||
//       parent.operator.startsWith("SAME"))
//   ) {
//     return {};
//   }

//   if (searchWithStarFields.includes(field) && data.term) {
//     data.term = `${data.term}*`;
//   }

//   if (parent.operator) {
//     parent.operator = parent.operator.toLocaleUpperCase();
//   }

//   // verify data has left right and operator
//   if (data.term) {
//     var fieldData = field.replace("<", "").replace(">", "");
//     if (
//       fieldData === "PD" ||
//       fieldData === "AD" ||
//       fieldData === "EPRD" ||
//       fieldData === "ED" ||
//       fieldData === "NED" ||
//       fieldData === "PFD" ||
//       fieldData === "PPD" ||
//       fieldData === "PRD"
//     ) {
//       if (data.term.length !== 8) {
//         throw new Error("Please check date formate!!");
//       }
//     }

//     if (["AND", "OR", "NOT"].includes(parent.operator)) {
//       if (isWildCard(data.term)) {
//         return {
//           term: {
//             wildcard: {
//               [field]: {
//                 value: data.term,
//                 case_insensitive: true,
//                 boost: boostFieldMap[field],
//               },
//             },
//           },
//         };
//       } else {
//         const term = _term(field, data.term);
//         const queryTermMatch = {
//           [field]: term === "term" ? { value: data.term } : data.term,
//         };

//         if (term === "term") {
//           queryTermMatch[field].case_insensitive = true;
//         }

//         if (term === "match" && boostFieldMap[field]) {
//           queryTermMatch[field] = {
//             query: data.term,
//             boost: boostFieldMap[field],
//           };
//         }

//         return {
//           term: {
//             [term]: queryTermMatch,
//           },
//         };
//       }
//     } else if (parent.operator) {
//       if (isWildCard(data.term)) {
//         return {
//           term: {
//             wildcard: {
//               pattern: data.term,
//             },
//           },
//         };
//       } else {
//         return {
//           term: {
//             match: {
//               query: data.term,
//             },
//           },
//         };
//       }
//     } else {
//       if (isWildCard(data.term)) {
//         if (!parent.right) {
//           return {
//             term: {
//               wildcard: {
//                 [field]: {
//                   value: data.term,
//                   case_insensitive: true,
//                 },
//               },
//             },
//           };
//         } else {
//           return {
//             term: {
//               wildcard: {
//                 pattern: data.term,
//               },
//             },
//           };
//         }
//       } else {
//         if (parent.fieldOp && isRangeQuery(parent.fieldOp)) {
//           return {
//             term: {
//               range: {
//                 [field]: {
//                   [getFieldOperator(parent.fieldOp)]: data.term
//                     .replaceAll("-", "")
//                     .replaceAll(" ", ""),
//                 },
//               },
//             },
//           };
//         } else {
//           const term = _term(field, data.term);
//           const x = {
//             [field]: term === "term" ? { value: data.term } : data.term,
//           };

//           if (term === "term") {
//             x[field].case_insensitive = true;
//           }

//           return {
//             term: {
//               [term]: x,
//             },
//           };
//         }
//       }
//     }
//   } else if (data.left && data.operator && data.right) {
//     if (data.operator === "<implicit>") {
//       data.operator = operatorBaseOnFields(field);

//       let leftTerm = getLeftTerm(data.left);
//       let rightTerm = getRightTerm(data.right);
//       console.log("dummyWindow required ",dummyWindow.origQuery);
//       dummyWindow.origQuery =
//         dummyWindow.origQuery &&
//         dummyWindow.origQuery.replace(
//           `${leftTerm} ${rightTerm}`,
//           `${leftTerm} ${data.operator.replace(":", "")} ${rightTerm}`
//         );
//         console.log("dummyWindow required ",dummyWindow.origQuery);
//     }

//     // process data in left first
//     const left = query(
//       dummyWindow,
//       data.left,
//       _f([data.left.field, data.field, field]),
//       data,
//       isCheckField
//     );
//     const right = query(
//       dummyWindow,
//       data.right,
//       _f([data.right.field, data.field, field]),
//       data,
//       isCheckField
//     );
//     if (left.term && right.term) {
//       return {
//         terms: [left.term, right.term],
//         operator: data.operator,
//         field: field,
//       };
//     }

//     if (
//       (!data.field || data.field === right.field) &&
//       (data.operator === right.operator || !right.operator) &&
//       right.terms &&
//       left.term
//     ) {
//       right.terms.unshift(left.term);
//       return {
//         terms: right.terms,
//         operator: data.operator,
//         field: right.field,
//       };
//     }
//     return {
//       left,
//       right,
//       operator: data.operator,
//       field: _f([data.field, field]),
//     };
//   } else if (!data.operator && !data.right) {
//     return query(dummyWindow,data.left, field, data, isCheckField);
//   }

//   const newData = {};

//   return newData;
// };

// const operator = (data) => {
//   let lcond = [];
//   let rcond = [];
//   let terms = [];
//   let term = data.term ? [data.term] : [];
//   let xterms = data.terms ? data.terms : [];
//   terms = [...term, ...xterms];
//   if (data.left) {
//     lcond = operator(data.left);
//     terms.push(lcond);
//   }
//   if (data.right) {
//     rcond = operator(data.right);
//     terms.push(rcond);
//   }
//   if (data.operator === "AND") {
//     return {
//       bool: {
//         must: terms,
//       },
//     };
//   } else if (data.operator === "OR") {
//     return {
//       bool: {
//         should: terms,
//       },
//     };
//   } else if (data.operator === "NOT") {
//     return {
//       bool: {
//         should: terms[0],
//         must_not: terms.slice(1),
//       },
//     };
//   } else if (data.operator && data.operator.startsWith("NEAR")) {
//     const [, gap] = data.operator.split(":");
//     return {
//       intervals: {
//         [data.field]: {
//           all_of: {
//             ordered: false,
//             max_gaps: gap ? gap : 10,
//             intervals: terms.map((term) => intervalTerms(term, data.field)),
//           },
//           boost: boostFieldMap[data.field],
//         },
//       },
//     };
//   } else if (data.operator && data.operator.startsWith("ADJ")) {
//     const [, gap] = data.operator.split(":");

//     return {
//       intervals: {
//         [data.field]: {
//           all_of: {
//             ordered: true,
//             max_gaps: gap ? gap : 0,
//             intervals: terms.map((term) => intervalTerms(term, data.field)),
//           },
//           boost: boostFieldMap[data.field],
//         },
//       },
//     };
//   } else if (data.operator && data.operator.startsWith("SAME")) {
//     const [, gap] = data.operator.split(":");
//     return {
//       intervals: {
//         [data.field]: {
//           all_of: {
//             ordered: false,
//             max_gaps: gap ? gap : -1,
//             intervals: terms.map((term) => intervalTerms(term, data.field)),
//           },
//           boost: boostFieldMap[data.field],
//         },
//       },
//     };
//   } else if (!data.operator) {
//     return {
//       bool: {
//         should: terms,
//       },
//     };
//   }
//   return data;
// };

// export const generateQuery = (dummyWindow,parsed, isCheckField = false) => {
//   return operator(
//     query(
//       dummyWindow,
//       parsed,
//       _f([
//         parsed && parsed.field,
//         parsed && parsed.left && parsed.left.field,
//         parsed && parsed.left && parsed.left.left && parsed.left.left.field,
//         parsed &&
//           parsed.left &&
//           parsed.left.left &&
//           parsed.left.left.left &&
//           parsed.left.left.left.field,
//         parsed &&
//           parsed.left &&
//           parsed.left.left &&
//           parsed.left.left.left &&
//           parsed.left.left.left.left &&
//           parsed.left.left.left.left.field,
//       ]),
//       {},
//       isCheckField
//     )
//   );
// };