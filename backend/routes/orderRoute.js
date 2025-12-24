import express from 'express';
import { placeOrder, placeOrderBM, placeOrderNBE, userOrders, allOrders, updateStatus } from '../controllers/orderController.js';
import  adminAuth  from "../middleware/adminAuth.js";
import  userAuth from '../middleware/auth.js';

const orderRouter = express.Router();

// Admin Features
orderRouter.post('/list', adminAuth, allOrders);
orderRouter.post('/status', adminAuth, updateStatus);

// Payment Features 
orderRouter.post('/place', userAuth, placeOrder);
orderRouter.post('/bm', userAuth, placeOrderBM);
orderRouter.post('/nbe', userAuth, placeOrderNBE);

// User Features
orderRouter.post('/userorders', userAuth, userOrders);

export default orderRouter;