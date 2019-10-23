const express = require('express');
const router = express.Router();

router.get("/",(req, res, next)=>{
    res.status(200).json({
        message : "geting the orders"
    })
});

router.post("/",(req, res, next)=>{
    const order = {
        productId: req.body.productId,
        quantity: req.body.quantity
    }
    res.status(201).json({
        message: 'handling POST req at orders',
        orderPlaced: order
    })
});

router.get('/:orderID',(req, res, next)=>{
    const id = req.params.orderID;
    res.status(200).json({
        message : "Good ID",
        orderID: id
    })
}); 

router.delete('/:orderID',(req, res, next)=>{
    const id = req.params.orderID;
    res.status(200).json({
        message : "Order deleted",
        orderID: id
    })
}); 

module.exports = router;