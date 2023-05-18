import { getPatentDetails } from "../controllers/patent-details.js";

/**
 * @swagger
 * components:
 *   schemas:
 *     patent-details-request:
 *       type: object
 *       required:
 *         - queryToSearch
 *       properties:
 *         queryToSearch:
 *           type: string
 *       example:
 *         queryToSearch: EP1503608A2
 */
/**
 * @swagger
 * /api/rwire/patent-details:
 *   post:
 *     summary: patent details
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/patent-details-request'
 *     responses:
 *       200:
 *         description: returns record for given publication number
 *       404:
 *         description: queryToSearch not found
 *       400:
 *         description: syntax error in queryToSearch
 *       500:
 *         description: server error
 */
export const connectPatentDetailsRoute = (router) => {
  router.route("/patent-details").post(getPatentDetails);
};
