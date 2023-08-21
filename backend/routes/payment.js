const express = require("express");
const router = express.Router();
const db = require("../db/config.js");
require('dotenv').config()
const Razorpay = require('razorpay');

const instance = new Razorpay({
    key_id: process.env.KEY_ID,
    key_secret: process.env.KEY_SECRET,
});

router.post("/order", async (req, res) => {
    try {
        const { order_id, amount } = req.body;
        const options = {
            amount: amount * 100,
            currency: "INR",
            receipt: order_id,
            payment_capture: 0,
        };
        const order = await instance.orders.create(options);
        if (!order)
            return res.status(500).json({
                error: "rozor error",
            });
        res.status(200).json(order);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "An error occurred while updating and deleteing items",
        });
    }
});

router.post("/capture/:paymentId", (req, res) => {
    try {
        const { amount } = req.body;
        return request(
            {
                method: "POST",
                url: `https://${process.env.KEY_ID}:${process.env.KEY_SECRET}@api.razorpay.com/v1/payments/${req.params.paymentId}/capture`,
                form: {
                    amount: amount * 100, // amount == Rs 10 // Same As Order amount
                    currency: "INR",
                },
            },
            async function (err, response, body) {
                if (err) {
                    return res.status(500).json({
                        message: "Something Went Wrong",
                    });
                }
                console.log("Status:", response.statusCode);
                console.log("Headers:", JSON.stringify(response.headers));
                console.log("Response:", body);
                return res.status(200).json(body);
            });
    } catch (err) {
        return res.status(500).json({
            message: "Something Went Wrong",
        });
    }
});

module.exports = router;