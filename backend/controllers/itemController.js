// make that function   
import ErrorHandler from '../utils/ErrorHandler.js';
import catchAsyncError from '../utils/catchAsyncError.js';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();



export const add_item = catchAsyncError(
    async (req, res, next) => {
        const { id, type, description } = req.body;
        if (!description || !type || !id) {
            return next(new ErrorHandler(200, "Please provide all the required fields"));
        }
        if (type !== "perishable" && type !== "non-perishable") {
            return next(new ErrorHandler(200, "Please provide a valid item type"));
        }
        const organisation = {
            id, type, description
        }
        await prisma.item.create({
            data: organisation
        });
        res.status(200).json({
            success: true,
            message: "Organisation added successfully",
            organisation
        });
    }
);