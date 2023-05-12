import express from "express";
import {
  getClassRecords,
  getSmartSearch,
  getAggregationDataNumberSearch,
  getPatentDetails,
  getCount,
  getFilterOptions,
  getChartData,
  getChartFiltersOptions
} from "../controllers/rwire-controllers.js";
export const router = express.Router();

router.route("/class").post(getClassRecords);
router.route("/search").post(getSmartSearch);
router.route("/with-includes-number-search").post(getAggregationDataNumberSearch);
router.route("/patent-details").post(getPatentDetails);
router.route("/count").post(getCount);
router.route("/filters-options").post(getFilterOptions);
router.route("/chart-data").post(getChartData);
router.route("/chart-filters-options").post(getChartFiltersOptions);
