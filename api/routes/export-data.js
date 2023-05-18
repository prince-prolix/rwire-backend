import { getExportData } from "../controllers/export-data.js";

/**
 * @swagger
 * components:
 *   schemas:
 *     export-data-request:
 *       type: object
 *       required:
 *         - queryToSearch
 *       properties:
 *         queryToSearch:
 *           type: string
 *         selectedFields:
 *           type: array
 *           items:
 *             type: string
 *         collapsebleField:
 *           type: string
 *         filters:
 *           type: array
 *           items:
 *             type: string
 */

/**
 * @swagger
 * /api/rwire/export-data:
 *   post:
 *     summary: export records in bulk ( currently - 500 , which can be upto 10000 )
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/export-data-request'
 *           example:
 *             queryToSearch: SS=(mobile)
 *             selectedFields:
 *               - AB_EN
 *               - AD
 *               - AA_EN
 *             collapsebleField: PN_B
 *
 *     responses:
 *       200:
 *         description: returns records in bulk ( currently - 500 , which can be upto 10000 )
 *       404:
 *         description: queryToSearch not found
 *       400:
 *         description: syntax error in queryToSearch
 *       500:
 *         description: server error
 */

export const connectExportDataRoute = ( router )=>{
  router.route("/export-data").post(getExportData);
}