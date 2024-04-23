import express from 'express';
const router = express.Router();
import { add_item_validate } from '../middleware/validate.js';
// import controller
import { add_item } from '../controllers/itemController.js';
// routes
router.route('/add/item').post(add_item_validate, add_item);


export default router;