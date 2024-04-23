import express from 'express';
const router = express.Router();
import { add_org_validate } from '../middleware/validate.js';
// import controller
import { add_org } from '../controllers/orgController.js';
// routes
router.route('/add/org').post(add_org_validate, add_org);


export default router;