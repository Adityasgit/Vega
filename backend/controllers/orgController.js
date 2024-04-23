// make that function   
import ErrorHandler from '../utils/ErrorHandler.js';
import catchAsyncError from '../utils/catchAsyncError.js';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

export const add_org = catchAsyncError(
    async (req, res, next) => {
        const { id, name } = req.body;
        if (!name || !id) {
            return next(new ErrorHandler(200, "Please provide all the required fields"));
        }
        const organisation = {
            id, name
        }
        await prisma.organization.create({
            data: organisation
        });

        res.status(200).json({
            success: true,
            message: "Organisation added successfully",
            organisation
        });
    }
);