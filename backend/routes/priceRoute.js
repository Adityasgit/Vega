/**
* @swagger
* components:
*   schemas:
*     DeliveryCharges:
*       type: object
*       required:
*         - zone
*         - organization_id
*         - total_distance
*         - item_type
*       properties:
*         zone:
*           type: string
*           description: zone of the item
*         organization_id:
*           type: number
*           description: organization id
*         total_distance:
*           type: number
*           description: total distance
*         item_type:
*           type: string
*           description: type of the item
*       
*     Pricing:
*       type: object
*       required:
*         - organisation_id
*         - item_id
*         - zone
*       properties:
*         organisation_id:
*           type: number
*           description: organization id
*         item_id:
*           type: number
*           description: item id
*         zone:
*           type: string
*           description: zone of the item
*   
* /api/v1/calculate/charges:
*   post:
*     summary: Calculate delivery charges
*     description: Calculate delivery charges
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/DeliveryCharges'
*     responses:
*       200:
*         description: Delivery charges calculated successfully
*       400:
*         description: Bad request
*       500:
*         description: Internal server error
* /api/v1/add/pricing:
*   post:
*     summary: Add pricing
*     description: Add pricing
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/components/schemas/Pricing'
*     responses:
*       200:
*         description: Pricing added successfully
*       400:
*         description: Bad request
*       500:
*         description: Internal server error
*
*/




import express from 'express';
const router = express.Router();
import { add_pricing_validate, calculate_charges_validate } from '../middleware/validate.js';
// import controller
import { getDeliveryCharges, add_pricing } from '../controllers/priceController.js';
// routes
router.route('/calculate/charges').post(calculate_charges_validate, getDeliveryCharges);
router.route('/add/pricing').post(add_pricing_validate, add_pricing);

export default router;