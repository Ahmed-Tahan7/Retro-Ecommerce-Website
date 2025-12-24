import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import axios from 'axios'

// Placing Orders using COD Method
const placeOrder = async (req, res) => {
    try {
        const { userId, items, amount, address } = req.body;
        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "Cash on Delivery",
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData);
        await newOrder.save();
        await userModel.findByIdAndUpdate(userId, {cartData:{}});

        res.json({ success: true, message: "Order Placed Successfully" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// Placing Orders using COD Method
const placeOrderBM = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

// Placing Orders using COD Method
const placeOrderNBE = async (req, res) => {
    try {
        
    } catch (error) {
        
    }
}

// All Orders data for Admin Panel
const allOrders = async (req, res) => {
    try {
        // Return all orders for admin panel
        const orders = await orderModel.find().sort({ date: -1 });
        res.json({ success: true, orders });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

// User Order data for Frontend
const userOrders = async (req, res) => {
    try {
        const {userId} = req.body
        const orders = await orderModel.find({userId})
        res.json({success: true, orders})
    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message });
    }
}

// Update Order Status by Admin Panel
const updateStatus = async (req, res) => {
    try {
        const {orderId, status} = req.body
        await orderModel.findByIdAndUpdate(orderId, {status})
        res.json({success: true, message: "Status Updated"})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
}

export { allOrders, userOrders, updateStatus, placeOrder, placeOrderBM, placeOrderNBE };