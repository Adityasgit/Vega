// make that function   
import ErrorHandler from '../utils/ErrorHandler.js';
import catchAsyncError from '../utils/catchAsyncError.js';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export const getDeliveryCharges = catchAsyncError(
    async (req, res, next) => {

        const { zone, organization_id, total_distance, item_type } = req.body;

        // Fetch pricing details from the database based on the provided parameters
        const pricing = await prisma.pricing.findFirst({
            where: {
                organizationId: organization_id,
                zone: zone,
                item: {
                    type: item_type,
                },
            },
        });
        if (!pricing || pricing === null) {
            return next(new ErrorHandler(404, "Pricing not found for the given parameters"));
        }
        // Calculate total price
        let totalPrice = 0;
        if (pricing) {
            const { baseDistanceInKm, fixPrice } = pricing;
            const kmPrice = item_type === "preishable" ? 1.5 : 1;
            if (total_distance <= baseDistanceInKm) {
                totalPrice = fixPrice;
            } else {
                totalPrice = fixPrice + (total_distance - baseDistanceInKm) * kmPrice;
            }
        }

        // Respond with the total price
        res.status(200).json({ success: "true", total_price: totalPrice });
    }

);

export const add_pricing = catchAsyncError(
    async (req, res, next) => {
        const base_distance_in_km = 5, km_price = 1, fix_price = 10;
        const { organisation_id, item_id, zone } = req.body;
        if (!organisation_id || !item_id || !zone) {
            return next(new ErrorHandler(200, "Please provide all the required fields"));
        }
        const pricing = {
            organizationId: organisation_id,
            itemId: item_id,
            zone,
            baseDistanceInKm: base_distance_in_km,
            kmPrice: km_price,
            fixPrice: fix_price
        }
        await prisma.pricing.create({
            data: pricing
        });
        res.status(200).json({
            success: true,
            message: "Pricing added successfully",
            pricing
        });
    }
);