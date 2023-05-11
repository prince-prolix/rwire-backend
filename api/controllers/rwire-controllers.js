import { url, classesSearchUrl } from "../../class-generator/constant.js";
import { generateElasticQueryClassGenerator } from "../../class-generator/index.js";
import { getElasticQuerySmartSearch } from "../../smart-search/index.js";
import { getAggregationDataNumberSearchQuery } from "../../aggregatedDataNumberSearch/index.js";
import { getPatentDetailsQuery } from "../../patentDetials/index.js";
import { getFinalElasticCountQuery } from "../../count/index.js";
import { request, response } from "express";
import { getElasticQueryFilterOptions } from "../../filterOptions/index.js";
import { getDataFromElastic } from "../database/db.js";
export const headers = {
  ...{
    Accept: "application/json",
    "Content-Type": "application/x-ndjson",
    responseType: "stream",
  },
};

export const getClassRecords = async (request, response) => {
  let keys = Object.keys(request.body);
  if (!keys.includes("class") && !keys.includes("keyword")) {
    response
      .status(404)
      .json({ message: "body must contain class or keyword" });
    return;
  }

  const elasticQuery = await generateElasticQueryClassGenerator(request.body);
  getDataFromElastic({url:`${classesSearchUrl}/_search`,elasticQuery,response});
};

export const getSmartSearch = async (request, response) => {
  let keys = Object.keys(request.body);
  if (!keys.includes("queryToSearch")) {
    response.status(404).json({ message: "body must contain queryToSearch" });
    return;
  }
  const {
    queryToSearch,
    isNumberWithIncludeSearch = false,
    dataSize = 10,
    dataFrom = 0,
    sortBy = "_score",
    sortType = "desc",
    includeFieldsOnResult = [],
    collapsebleField = "PN_B",
    filters = [],
  } = request.body;
  const requestOptions = {
    queryToSearch,
    isNumberWithIncludeSearch,
    dataSize,
    dataFrom,
    sortBy,
    sortType,
    includeFieldsOnResult,
    collapsebleField,
    filters,
  };
  let elasticQuery = await getElasticQuerySmartSearch(queryToSearch, requestOptions);
  if (elasticQuery === "syntax error") {
    response.status(400).json({ message: "syntax error" });
    return;
  }
  getDataFromElastic({url:`${url}/_search`,elasticQuery,response});
};
export const getAggregationDataNumberSearch = async (request, response) => {
  let keys = Object.keys(request.body);
  if (!keys.includes("queryToSearch")) {
    response.status(404).json({ message: "body must contain queryToSearch" });
    return;
  }
  const {
    queryToSearch,
    dataSize = 10,
    dataFrom = 0,
    sortBy = "_score",
    sortType = "desc",
    includeFieldsOnResult = [],
    collapsebleField = "PN_B",
    filters = [],
  } = request.body;
  const requestOptions = {
    queryToSearch,
    selectedIncludes: [],
    dataSize,
    dataFrom,
    sortBy,
    sortType,
    includeFieldsOnResult,
    collapsebleField,
    filters,
  };
  const elasticQuery = getAggregationDataNumberSearchQuery(
    queryToSearch,
    requestOptions
  );
  getDataFromElastic({url:`${url}/_search`,elasticQuery,response});

};

export const getPatentDetails = async (request, response) => {
  let keys = Object.keys(request.body);
  if (!keys.includes("queryToSearch")) {
    response.status(404).json({ message: "body must contain queryToSearch" });
    return;
  }
  const elasticQuery = await getPatentDetailsQuery(request.body.queryToSearch);
  getDataFromElastic({url:`${url}/_search`,elasticQuery,response});

};
export const getCount = async (request, response) => {
  let keys = Object.keys(request.body);
  if (!keys.includes("queryToSearch")) {
    response.status(404).json({ message: "body must contain queryToSearch" });
    return;
  }
  const { queryToSearch, filters = [] } = request.body;
  const requestOptions = { queryToSearch, filters };

  let elasticQuery = await getFinalElasticCountQuery(queryToSearch, requestOptions);
  getDataFromElastic({url:`${url}/_count`,elasticQuery,response});
}
export const getFilterOptions = async (request, response) => {
  let keys = Object.keys(request.body);
  if (!keys.includes("queryToSearch")) {
    response.status(404).json({ message: "body must contain queryToSearch" });
    return;
  }
  const {
    queryToSearch,
    dataSize = 0,
    fields,
    filtersSearchText,
    collapsebleField,
    filters,
  } = request.body;
  const requestOptions = {
    queryToSearch,
    dataSize,
    fields,
    filtersSearchText,
    collapsebleField,
    filters,
  };
  // console.log(JSON.stringify(requestOptions));
  let elasticQuery = await getElasticQueryFilterOptions(queryToSearch, requestOptions);
  if (elasticQuery === "syntax error") {
    response.status(400).json({ message: "syntax error" });
    return;
  }
  getDataFromElastic({url:`${url}/_search`,elasticQuery,response});
};
