import { url, classesSearchUrl } from "../../class-generator/constant.js";
import { generateElasticQueryClassGenerator } from "../../class-generator/index.js";
import { getElasticQuerySmartSearch } from "../../smart-search/index.js";
import { getAggregationDataNumberSearchQuery } from "../../aggregatedDataNumberSearch/index.js";
import { getPatentDetailsQuery } from "../../patentDetials/index.js";
import { getFinalElasticCountQuery } from "../../count/index.js";
import { getElasticQueryFilterOptions } from "../../filterOptions/index.js";
import { getElasticQueryChartData } from "../../cognizance/chart-data/index.js";
import { getDataFromElastic } from "../database/db.js";
import { getElasticQueryChartFiltersOptions } from "../../cognizance/chart-filters-options/index.js";
import { getElasticQueryExportData } from "../../exportData/index.js";
export const headers = {
  ...{
    Accept: "application/json",
    "Content-Type": "application/x-ndjson",
    responseType: "stream",
  },
};

export const getClassRecords = async (request, response) => {
  const { class: classes, keyword, types } = request.body;
  const queryValues = { classes, keyword, types };
  if (!classes && !keyword) {
    response
      .status(404)
      .json({ message: "body must contain class or keyword" });
    return;
  }
  const elasticQuery = await generateElasticQueryClassGenerator(queryValues);
  getDataFromElastic({
    url: `${classesSearchUrl}/_search`,
    elasticQuery,
    response,
  });
};

export const getSmartSearch = async (request, response) => {
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
  if (!queryToSearch) {
    response.status(404).json({ message: "body must contain queryToSearch" });
    return;
  }
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
  let elasticQuery = await getElasticQuerySmartSearch(
    queryToSearch,
    requestOptions
  );
  if (elasticQuery === "syntax error") {
    response.status(400).json({ message: "syntax error" });
    return;
  }
  getDataFromElastic({ url: `${url}/_search`, elasticQuery, response });
};
export const getAggregationDataNumberSearch = async (request, response) => {
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
  if (!queryToSearch) {
    response.status(404).json({ message: "body must contain queryToSearch" });
    return;
  }
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
  if (elasticQuery === "syntax error") {
    response.status(400).json({ message: "syntax error" });
    return;
  }
  getDataFromElastic({ url: `${url}/_search`, elasticQuery, response });
};

export const getPatentDetails = async (request, response) => {
  const { queryToSearch } = request.body;
  if (!queryToSearch || queryToSearch === "") {
    response.status(404).json({ message: "body must contain queryToSearch" });
    return;
  }
  const elasticQuery = await getPatentDetailsQuery(queryToSearch);
  if (elasticQuery === "syntax error") {
    response.status(400).json({ message: "syntax error" });
    return;
  }
  getDataFromElastic({ url: `${url}/_search`, elasticQuery, response });
};
export const getCount = async (request, response) => {
  const { queryToSearch, filters = [] } = request.body;
  const requestOptions = { queryToSearch, filters };
  if (!queryToSearch || queryToSearch === "") {
    response.status(404).json({ message: "body must contain queryToSearch" });
    return;
  }
  let elasticQuery = await getFinalElasticCountQuery(
    queryToSearch,
    requestOptions
  );
  if (elasticQuery === "syntax error") {
    response.status(400).json({ message: "syntax error" });
    return;
  }
  getDataFromElastic({ url: `${url}/_count`, elasticQuery, response });
};
export const getFilterOptions = async (request, response) => {
  const {
    queryToSearch,
    dataSize = 0,
    fields,
    filtersSearchText,
    collapsebleField,
    filters,
  } = request.body;
  if (!queryToSearch || queryToSearch === "") {
    response.status(404).json({ message: "body must contain queryToSearch" });
    return;
  }
  const requestOptions = {
    queryToSearch,
    dataSize,
    fields,
    filtersSearchText,
    collapsebleField,
    filters,
  };
  let elasticQuery = await getElasticQueryFilterOptions(
    queryToSearch,
    requestOptions
  );
  if (elasticQuery === "syntax error") {
    response.status(400).json({ message: "syntax error" });
    return;
  }
  getDataFromElastic({ url: `${url}/_search`, elasticQuery, response });
};
export const getChartData = async (request, response) => {
  const {
    queryToSearch,
    isNumberWithIncludeSearch = false,
    dataSize = 0,
    filters = [],
    chartFilters = [],
    field1,
    field2,
    isMultiSeries = false,
    topNumber = 10,
  } = request.body;
  if (!queryToSearch || queryToSearch === "") {
    response.status(404).json({ message: "body must contain queryToSearch" });
    return;
  }
  const requestOptions = {
    queryToSearch,
    isNumberWithIncludeSearch,
    dataSize,
    filters,
    chartFilters,
    field1,
    field2,
    isMultiSeries,
    topNumber,
  };

  let elasticQuery = await getElasticQueryChartData(
    queryToSearch,
    requestOptions
  );
  if (elasticQuery === "syntax error") {
    response.status(400).json({ message: "syntax error" });
    return;
  }
  getDataFromElastic({ url: `${url}/_search`, elasticQuery, response });
};
export const getChartFiltersOptions = async (request, response) => {
  const {
    queryToSearch,
    isNumberWithIncludeSearch = false,
    dataSize = 0,
    filters = [],
    chartFilters = [],
    aggregationField,
    aggregationFilterSearchtext = "",
    aggregationSize = 10,
  } = request.body;
  if (queryToSearch === undefined || queryToSearch === "") {
    response.status(404).json({ message: "body must contain queryToSearch" });
    return;
  } else if (aggregationField === undefined) {
    response
      .status(404)
      .json({ message: "body must contain aggregation field" });
    return;
  }
  const requestOptions = {
    queryToSearch,
    isNumberWithIncludeSearch,
    dataSize,
    filters,
    chartFilters,
    aggregationField,
    aggregationFilterSearchtext,
    aggregationSize,
  };
  let elasticQuery = await getElasticQueryChartFiltersOptions(
    queryToSearch,
    requestOptions
  );
  if (elasticQuery === "syntax error") {
    response.status(400).json({ message: "syntax error" });
    return;
  }
  getDataFromElastic({ url: `${url}/_search`, elasticQuery, response });
};

export const getExportData = async (request, response) => {
  const {
    queryToSearch,
    includeFieldsOnResult = ["PN_B"],
    collapsebleField = "PN_B",
    filters = [],
  } = request.body;
  const requestOptions = {
    queryToSearch,
    includeFieldsOnResult,
    collapsebleField,
    filters,
  };
  if (!queryToSearch || queryToSearch === "") {
    response.status(404).json({ message: "body must contain queryToSearch" });
    return;
  }
  let elasticQuery = await getElasticQueryExportData(
    queryToSearch,
    requestOptions
  );
  if (elasticQuery === "syntax error") {
    response.status(400).json({ message: "syntax error" });
    return;
  }
  getDataFromElastic({ url: `${url}/_search`, elasticQuery, response });
};
