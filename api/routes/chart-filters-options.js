import { getChartFiltersOptions } from "../controllers/chart-filters-options.js";

/**
 * @swagger
 * components:
 *   schemas:
 *     chart-filters-options-request:
 *       type:  object
 *       required:
 *         - queryToSearch
 *       properties:
 *         queryToSearch:
 *           type: string
 *         isNumberWithIncludeSearch:
 *           type: boolean
 *         selectedIncludes:
 *           type: array
 *           items:
 *             type: string
 *         aggregationField:
 *           type: string
 *         aggregationFilterSearchtext:
 *           type: string
 *         aggregationSize:
 *           type: number
 *         filters:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               filter_name:
 *                 type: array
 *                 items:
 *                   type: string
 *         chartFilters:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               filter_name:
 *                 type: array
 *                 items:
 *                   type: string
 */

/**
 * @swagger
 * /api/rwire/chart-filters-options:
 *   post:
 *     summary: search chart filters options
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/chart-filters-options-request'
 *           examples:
 *             sample1:
 *               value:
 *                 queryToSearch: SS=(mobile)
 *                 aggregationField: PRY
 *                 filters:
 *                   - CA_EN:
 *                       - nokia corporation
 *                       - qualcomm incorporated
 *                       - telefonaktiebolaget lm ericsson (publ)
 *                 chartFilters:
 *                   - IN_EN:
 *                     - " tiedemann edward g. jr. "
 *                     - " chen tao "
 *             sample2:
 *               value:
 *                 queryToSearch: PN=(EP1503608A2 OR EP1463247A2)
 *                 isNumberWithIncludeSearch: true,
 *                 selectedIncludes:
 *                   - BCP
 *                 aggregationField: IN_EN
 *     responses:
 *       200:
 *         description: returns searched filters options for chart data
 *       404:
 *         description: queryToSearch not found
 *       400:
 *         description: syntax error in queryToSearch
 *       500:
 *         description: server error
 */

export const connectChartFiltersOptionsRoute = (router) => {
  router.route("/chart-filters-options").post(getChartFiltersOptions);
};
