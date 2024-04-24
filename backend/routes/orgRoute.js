/**
* @swagger
* components:
*   schemas:
*     Organization:
*       type: object
*       required:
*         - name
*         - id
*       properties:
*         name:
*           type: string
*           description: name of the organization
*         id:
*           type: number
*           description: organization id
*
* /api/v1/add/org:
*   post:
*     summary: Add organization
*     description: Add organization
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Organization'
*     responses:
*       200:
*         description: Organization added successfully
*       400:
*         description: Bad request
*       500:
*         description: Internal server error
* */




import express from 'express';
const router = express.Router();
import { add_org_validate } from '../middleware/validate.js';
// import controller
import { add_org } from '../controllers/orgController.js';
// routes
router.route('/add/org').post(add_org_validate, add_org);


export default router;