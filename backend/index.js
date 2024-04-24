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
import swaggerDocument from './swagger.json'
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// error middleware
app.use(errormiddleware)

// server
app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});

