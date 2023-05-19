import { getChartData } from "../controllers/chart-data.js";

/**
 * @swagger
 * components:
 *   schemas:
 *     chart-data-request:
 *       type: object
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
 *         field1:
 *           type: string
 *         field2:
 *           type: string
 *         topNumber:
 *           type: number
 *         isMultiSeries:
 *           type: boolean
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
 * /api/rwire/chart-data:
 *   post:
 *     summary: search chart data
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/chart-data-request'
 *           examples:
 *             sample1:
 *               value:
 *                 queryToSearch: SS=(mobile)
 *                 field1: "PRY"
 *                 field2: "PN_B"
 *                 topNumber: 10
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
 *                 queryToSearch: PN=(EP1500608A2 OR EP1463247A2)
 *                 isNumberWithIncludeSearch: true,
 *                 selectedIncludes:
 *                   - BCP
 *                 field1: "PRY"
 *                 field2: "PN_B"
 *                 topNumber: 10
 *     responses:
 *       200:
 *         description: returns searched records for chart data

 *       400:
 *         description: malformed request
 *       502:
 *         description: upstream server error
 *       500:
 *         description: unexpected server error
 *
 */
export const connectChartDataRoute = (router) => {
  router.route("/chart-data").post(getChartData);
};
