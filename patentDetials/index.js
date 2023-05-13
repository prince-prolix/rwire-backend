export const getPatentDetailsQuery = async (queryToSearch) => {
  try {
    const id = queryToSearch;
    const finalElasticSearchQuery = `{
            "query": {
                "bool": {
                    "filter": {
                        "ids": {
                            "values":"${id}"
                        }
                    }
                }
            }
        }`;
    return finalElasticSearchQuery;
  } catch (error) {
    return "syntax error";
  }
};
