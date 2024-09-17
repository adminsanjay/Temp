app.post('/createOrder', (req, res)=>{ 

    // STEP 1:
    const {amount,currency,receipt, notes}  = req.body;      
        
    // STEP 2:    
    razorpayInstance.orders.create({amount, currency, receipt, notes}, 
        (err, order)=>{
        
          //STEP 3 & 4: 
          if(!err)
            res.json(order)
          else
            res.send(err);
        }
    )
});
