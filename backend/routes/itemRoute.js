/**
* @swagger
* components:
*   schemas:
*     Item:
*       type: object
*       required:
*         - type
*         - id
*         - description
*       properties:
*         type:
*           type: string
*           description: type of the item
*         id:
*           type: number
*           description: item id
*         description:
*           type: string
*           description: description of the item
* /api/v1/add/item:
*   post:
*     summary: Add item
*     description: Add item
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Item'
*     responses:
*       200:
*         description: Item added successfully
*       400:
*         description: Bad request
*       500:
*         description: Internal server error
*/


import express from 'express';
const router = express.Router();
import { add_item_validate } from '../middleware/validate.js';
// import controller
import { add_item } from '../controllers/itemController.js';
// routes
router.route('/add/item').post(add_item_validate, add_item);


export default router;