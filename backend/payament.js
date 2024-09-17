const express = require('express');
const Razorpay = require('razorpay'); 

// This razorpayInstance will be used to
// access any resource from razorpay
const razorpayInstance = new Razorpay({

    // Replace with your key_id
    key_id: rzp_test_fiIwmRET6CApc2,

    // Replace with your key_secret
    key_secret: YAEUthsup8SijNs3iveeVlL1
});

const routes = express();
const PORT = process.env.PORT || '5000';

// Here we will create two routes one 
// /createOrder and other /verifyOrder 
// Replace these comments with the code 
// provided later in step 2 & 8 for routes

routes.listen(PORT, ()=>{
    console.log("Server is Listening on Port ", PORT);
});
