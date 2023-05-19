import { getFilterOptions } from "../controllers/filters-options.js";

/**
 * @swagger
 * components:
 *   schemas:
 *     filters-options-request:
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
 *         fields:
 *           type: array
 *           items:
 *             type: string
 *         filtersSearchText:
 *           type: object
 *           properties:
 *             fitler_name:
 *              type: string
 *         collapsebleField:
 *           type: string
 *         filters:
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
 * /api/rwire/filters-options:
 *   post:
 *     summary: search filters options
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/filters-options-request'
 *           examples:
 *             sample1:
 *               value:
 *                 queryToSearch: SS=(mobile)
 *                 fields:
 *                   - CA_EN
 *             sample2:
 *               value:
 *                 queryToSearch: PN=(EP1500608A2 OR EP1463247A2)
 *                 fields:
 *                   - CA_EN
 *                 isNumberWithIncludeSearch: true,
 *                 selectedIncludes:
 *                   - BCP
 *     responses:
 *       200:
 *         description: returns searched filters options for chart data
 *       400:
 *         description: bad request
 *       502:
 *         description: upstream server error
 *       500:
 *         description: unexpected server error
 */

export const connectFiltersOptionsRoute = (router) => {
  router.route("/filters-options").post(getFilterOptions);
};
