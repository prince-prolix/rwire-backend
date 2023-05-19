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
 *         queryToSearch: EP1500608A2
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

 *       400:
 *         description: bad request
 *       502:
 *         description: upstream server error
 *       500:
 *         description: unexpected server error
 */
export const connectPatentDetailsRoute = (router) => {
  router.route("/patent-details").post(getPatentDetails);
};
