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
 *                 queryToSearch: PN=(EP1503608A2 OR EP1463247A2)
 *                 fields:
 *                   - CA_EN
 *                 isNumberWithIncludeSearch: true,
 *                 selectedIncludes:
 *                   - BCP
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

export const connectFiltersOptionsRoute = ( router )=>{
  router.route("/filters-options").post(getFilterOptions);
}