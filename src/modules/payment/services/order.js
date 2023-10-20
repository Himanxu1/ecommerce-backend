const Razorpay = require("razorpay");

async function placeOrder(req,res){
    try {
        const instance = new Razorpay({
            // eslint-disable-next-line no-undef
            key_id: process.env.RAZORPAY_KEY_ID,
            // eslint-disable-next-line no-undef
            key_secret: process.env.RAZORPAY_SECRET,
        });

        const options = {
            amount: req.body.amount, // amount in smallest currency unit
            currency: "INR",
            receipt: "receipt_order_74394",
        };

        const order = await instance.orders.create(options);

        if (!order) return res.status(500).send("Some error occured");

        res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
}


module.exports = placeOrder
