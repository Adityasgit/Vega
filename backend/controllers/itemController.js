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
        const organisation = {
            id, type, description
        }
        await prisma.Item.create({
            data: organisation
        });
        res.status(200).json({
            success: true,
            message: "Organisation added successfully",
            organisation
        });
    }
);