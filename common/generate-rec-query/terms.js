export const getLeftTerm = (left) => {
  if (left.term) {
    return left.term;
  } else {
    getLeftTerm(left.left);
  }
};

export const getRightTerm = (right) => {
  if (right.term) {
    return right.term;
  } else if (right.left.term) {
    return right.left.term;
  } else {
    getRightTerm(right.left);
  }
};

const spanTerms = (terms, field) => {
  if (terms.should) {
    return {
      span_or: {
        clauses: spanShouldTerms(terms, field),
      },
    };
  }

  if (terms.must) {
    return {
      span_near: {
        clauses: spanMustTerms(terms, field),
      },
    };
  }

  if (terms.match) {
    return {
      span_term: {
        [field]: terms.match[field]
          ? terms.match[field].query
            ? terms.match[field].query
            : terms.match[field]
          : terms.match.query,
      },
    };
  }

  if (terms.wildcard) {
    // return terms;
    return {
      span_multi: {
        match: terms.wildcard.pattern
          ? {
              wildcard: {
                [field]: {
                  value: terms.wildcard.pattern,
                },
              },
            }
          : terms,
      },
    };
  }

  if (terms.bool) {
    return spanTerms(terms.bool, field);
  }

  return terms;
};

const spanShouldTerms = (terms, field) => {
  if (Array.isArray(terms.should)) {
    return terms.should.map((term) => spanTerms(term, field));
  } else {
    return {
      span_term: {
        [field]: [terms.should],
      },
    };
  }
};

const spanMustTerms = (terms, field) => {
  if (Array.isArray(terms.must)) {
    return terms.must.map((term) => spanTerms(term, field));
  } else {
    return {
      span_near: {
        clauses: {
          span_term: {
            [field]: [terms.must],
          },
        },
      },
    };
  }
};

export const intervalTerms = (terms, field) => {
  if (terms.should) {
    return intervalShouldTerms(terms, field);
  }

  if (terms.must) {
    return intervalMustTerms(terms, field);
  }

  if (terms.intervals) {
    return intervalIntervalsTerms(terms, field);
  }

  if (terms.must_not) {
    return intervalMustNotTerms(terms, field);
  }
  if (terms.match) {
    return {
      match: {
        query: terms.match[field]
          ? terms.match[field].query
            ? terms.match[field].query
            : terms.match[field]
          : terms.match.query,
      },
    };
  }
  if (terms.match_phrase) {
    return {
      match: {
        query: terms.match_phrase[field]
          ? terms.match_phrase[field]
          : terms.match_phrase.query,
      },
    };
  }
  if (terms.wildcard) {
    // return terms;
    return {
      wildcard: {
        pattern: terms.wildcard[field]
          ? terms.wildcard[field].value
          : terms.wildcard.pattern,
      },
    };
  }
  if (terms.bool) {
    return intervalTerms(terms.bool, field);
  }
  return terms;
};

const intervalIntervalsTerms = (terms, field) => {
  if (terms.intervals[field]["all_of"]) {
    return {
      all_of: terms.intervals[field]["all_of"],
    };
  } else {
    return {
      any_of: terms.intervals[field]["any_of"],
    };
  }
};

const intervalShouldTerms = (terms, field) => {
  if (Array.isArray(terms.should)) {
    return {
      any_of: {
        intervals: terms.should.map((term) => intervalTerms(term, field)),
      },
    };
  } else {
    return {
      any_of: [terms.should],
    };
  }
};

const intervalMustTerms = (terms, field) => {
  return {
    all_of: {
      intervals: terms.must.map((term) => intervalTerms(term, field)),
    },
  };
};

const intervalMustNotTerms = (terms, field) => {
  return {
    filter: {
      not_containing: terms.must_not.map((term) =>
        intervalTerms(term, field)
      )[0], //can we do multiple nots  ?
    },
  };
};
