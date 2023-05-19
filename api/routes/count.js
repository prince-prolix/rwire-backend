import { getCount } from "../controllers/count.js";

/**
 * @swagger
 * components:
 *   schemas:
 *     count-request:
 *       type: object
 *       required:
 *         - queryToSearch
 *       properties:
 *         queryToSearch:
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
 * /api/rwire/count:
 *   post:
 *     summary: count of records
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/count-request'
 *           example:
 *             queryToSearch: SS=(mobile)
 *             filters:
 *               - CA_EN:
 *                 - samsung electronics co. ltd.
 *                 - telefonaktiebolaget lm ericsson (publ)
 *                 - nokia corporation
 *                 - nec corporation
 *     responses:
 *       200:
 *         description: returns count of records

 *       400:
 *         description: malformed request
 *       502:
 *         description: upstream server error
 *       500:
 *         description: unexpected server error
 */

export const connectCountRoute = (router) => {
  router.route("/count").post(getCount);
};
