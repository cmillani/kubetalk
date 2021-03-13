import { Router } from 'express';
import UserRouter from './Users';
import ToolboxRouter from './Toolbox'

// Init router and path
const router = Router();

// Add sub-routes
router.use('/users', UserRouter);
router.use('/toolbox', ToolboxRouter);

// Export the base-router
export default router;
