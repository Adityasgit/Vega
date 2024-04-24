import express from 'express'
const app = express();

// conigurations
import dotenv from 'dotenv'
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// middlewares
import { errormiddleware } from './middleware/error.js'
import cors from 'cors'
app.use(cors());
// error handlers
import ErrorHandler from './utils/ErrorHandler.js';
import catchAsyncError from './utils/catchAsyncError.js';
// routes
import priceRoute from './routes/priceRoute.js'
import itemRoute from './routes/itemRoute.js'
import orgRoute from './routes/orgRoute.js'
app.use('/api/v1', priceRoute);
app.use('/api/v1', itemRoute);
app.use('/api/v1', orgRoute);


// swagger documentation
import swaggerUi from 'swagger-ui-express'
import swaggerDoc from 'swagger-jsdoc'
const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Price Tracker API',
            version: '1.0.0',
            description: 'This is a price tracker API',
            contact: {
                name: 'Aditya Arora',
                email: 'in7814692152@gmail.com',
                url: 'https://linkedin.com/in/adityaarorasde',
            }
        },
        servers: [
            {
                url: process.env.BASE_URL,
            },
        ],
    },
    apis: ['./routes/*.js'],
};
const specs = swaggerDoc(options);
app.use('/', swaggerUi.serve, swaggerUi.setup(specs));

// error middleware
app.use(errormiddleware)

// server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

