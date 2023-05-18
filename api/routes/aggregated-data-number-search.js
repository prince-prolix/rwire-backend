import { getAggregationDataNumberSearch } from "../controllers/aggregated-data-number-search.js";

export const connectWithIncludesNumberSearchRoute = (router) => {
  router
    .route("/with-includes-number-search")
    .post(getAggregationDataNumberSearch);
};
