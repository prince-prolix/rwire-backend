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
 *             includeFieldsOnResult:
 *               - AB_EN
 *               - AD
 *               - AA_EN
 *
 *     responses:
 *       200:
 *         description: returns records in bulk ( currently - 500 , which can be upto 10000 )

 *       400:
 *         description: malformed request
 *       502:
 *         description: upstream server error
 *       500:
 *         description: unexpected server error
 */

export const connectExportDataRoute = (router) => {
  router.route("/export-data").post(getExportData);
};
