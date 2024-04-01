import express from 'express';
import {
  registerUser,
  loginUser,
  getMe,
} from '../controllers/userController.mjs';
import protect from '../middleware/authMiddleware.mjs';

const router = express.Router();

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);

export default router;
