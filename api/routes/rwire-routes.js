import express from "express";
import { getClassRecords } from "../controllers/class-generator.js";
import { getSearch } from "../controllers/search.js";
import { getAggregationDataNumberSearch } from "../controllers/aggregated-data-number-search.js";
import { getPatentDetails } from "../controllers/patent-details.js";
import { getCount } from "../controllers/count.js";
import { getFilterOptions } from "../controllers/filters-options.js";
import { getChartData } from "../controllers/chart-data.js";
import { getChartFiltersOptions } from "../controllers/chart-filters-options.js";
import { getExportData } from "../controllers/export-data.js";

export const router = express.Router();
/**
 * Route Module for API. It maps routes with
 * thier appropriate controllers.
 */
router.route("/class").post(getClassRecords);
router.route("/search").post(getSearch);
router
  .route("/with-includes-number-search")
  .post(getAggregationDataNumberSearch);
router.route("/patent-details").post(getPatentDetails);
router.route("/count").post(getCount);
router.route("/filters-options").post(getFilterOptions);
router.route("/chart-data").post(getChartData);
router.route("/chart-filters-options").post(getChartFiltersOptions);
router.route("/export-data").post(getExportData);
