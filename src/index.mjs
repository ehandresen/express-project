import express from 'express';
import dotenv
import router from '../routes/goalRoutes.mjs';
import errorHandler from '../middleware/errorMiddleware.mjs';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', router);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Running on port: ${PORT}`));
