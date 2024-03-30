import express from 'express';
import router from '../routes/goalRoutes.mjs';

const app = express();

const PORT = process.env.PORT || 5000;

app.use('/api/goals', router);

app.listen(PORT, () => console.log(`Running on port: ${PORT}`));
