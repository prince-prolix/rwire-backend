export const getPatentDetailsQuery = async (queryToSearch)=>{
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
    }`
    return finalElasticSearchQuery
}