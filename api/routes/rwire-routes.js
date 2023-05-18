import express from "express";
import { connectChartDataRoute } from "./chart-data.js";
import { connectChartFiltersOptionsRoute } from "./chart-filters-options.js";
import { connectClassRoute} from "./class-generator.js";
import { connectExportDataRoute } from "./export-data.js"
import { connectSearchRoute } from "./search.js";
import { connectPatentDetailsRoute } from "./patent-details.js";
import { connectCountRoute } from "./count.js";
import { connectFiltersOptionsRoute } from "./filters-options.js";
import { connectWithIncludesNumberSearchRoute } from "./aggregated-data-number-search.js";

export const router = express.Router();
/**
 * Route Module for API. It maps routes with
 * thier appropriate controllers.
 */
connectChartDataRoute(router);
connectSearchRoute(router);
connectPatentDetailsRoute(router);
connectCountRoute(router);
connectFiltersOptionsRoute(router);
connectChartFiltersOptionsRoute(router);
connectWithIncludesNumberSearchRoute(router);
connectClassRoute(router);
connectExportDataRoute(router);