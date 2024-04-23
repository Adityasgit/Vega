import { body, validationResult } from 'express-validator';
import ErrorHandler from '../utils/ErrorHandler.js';

// Middleware for request body validation
export const calculate_charges_validate = [
    body('zone').notEmpty().isString(),
    body('organization_id').notEmpty().isNumeric(),
    body('total_distance').notEmpty().isNumeric(),
    body('item_type').notEmpty().isString(),

    // Check for errors and respond accordingly
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(new ErrorHandler(400, errors.array()[0].msg));
        }
        next();
    }
];

export const add_pricing_validate = [
    body('zone').notEmpty().isString(),
    body('organisation_id').notEmpty().isNumeric(),
    body('item_id').notEmpty().isNumeric(),

    // Check for errors and respond accordingly
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(new ErrorHandler(400, errors.array()[0].msg));
        }
        next();
    }
];

export const add_org_validate = [
    body('name').notEmpty().isString(),
    body('id').notEmpty().isNumeric(),

    // Check for errors and respond accordingly
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(new ErrorHandler(400, errors.array()[0].msg));
        }
        next();
    }
];

export const add_item_validate = [
    body('type').notEmpty().isString(),
    body('id').notEmpty().isNumeric(),
    body('description').notEmpty().isString(),

    // Check for errors and respond accordingly
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return next(new ErrorHandler(400, errors.array()[0].msg));
        }
        next();
    }
];
