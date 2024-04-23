import express from 'express';
const router = express.Router();
import { add_pricing_validate, calculate_charges_validate } from '../middleware/validate.js';
// import controller
import { getDeliveryCharges, add_pricing } from '../controllers/priceController.js';
// routes
router.route('/calculate/charges').post(calculate_charges_validate, getDeliveryCharges);
router.route('/add/pricing').post(add_pricing_validate, add_pricing);

export default router;