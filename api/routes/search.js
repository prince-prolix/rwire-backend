import { getSearch } from "../controllers/search.js";

/**
 * @swagger
 * components:
 *   schemas:
 *     search-request:
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
 *         dataSize:
 *           type: number
 *         dataFrom:
 *           type: number
 *         sortBy:
 *           type: string
 *         sortType:
 *           type: string
 *         includeFieldsOnResult:
 *           type: array
 *           items:
 *             type: string
 *         collapsebleFields:
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
 * /api/rwire/search:
 *   post:
 *     summary: search
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/search-request'
 *           examples:
 *             sample1:
 *               value:
 *                 queryToSearch: SS=(mobile)
 *                 dataSize: 10
 *                 dataFrom: 0
 *                 sortBy: _score
 *                 sortType: desc
 *                 includeFieldsOnResult:
 *                   - PN_B
 *                   - CA_EN
 *                 collapsebleFields: PN_B
 *                 filters:
 *                   - CA_EN:
 *                     - samsung electronics co. ltd.
 *                     - telefonaktiebolaget lm ericsson (publ)
 *                     - nokia corporation
 *                     - nec corporation
 *             sample2:
 *               value:
 *                 queryToSearch: PN=(EP1500608A2 OR EP1463247A2)
 *                 isNumberWithIncludeSearch: true,
 *                 selectedIncludes:
 *                   - BCP
 *                 dataSize: 10
 *                 dataFrom: 0
 *                 sortBy: _score
 *                 sortType: desc
 *                 includeFieldsOnResult:
 *                   - PN_B
 *                   - CA_EN
 *                 collapsebleFields: PN_B
 *                 filters:
 *                   - IN_EN:
 *                     - " okuyama toshiyuki "
 *
 *     responses:
 *       200:
 *         description: returns searched records
 *       400:
 *         description: bad request
 *       502:
 *         description: upstream server error
 *       500:
 *         description: unexpected server error
 */
export const connectSearchRoute = (router) => {
  router.route("/search").post(getSearch);
};
