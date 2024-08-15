import express from 'express';
import usersRoutes from './usersRouter.js';
const router = express.Router();

router.use('/users',usersRoutes);

export default router