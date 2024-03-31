import express from 'express';
import colors from 'colors';
import 'dotenv/config';
import router from '../routes/goalRoutes.mjs';
import errorHandler from '../middleware/errorMiddleware.mjs';
import connectDB from '../config/db.mjs';

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', router);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Running on port: ${PORT}`));
