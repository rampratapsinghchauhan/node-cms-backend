const express = require('express');
const router = express.Router();

router.get("/",(req, res, next)=>{
    res.status(200).json({
        message : "get is working"
    })
});

router.post("/",(req, res, next)=>{
    res.status(200).json({
        message : "get is working for post too"
    })
});

router.get('/:productId',(req, res, next)=>{
    const id = req.params.productId;
    if ( id == "1") {
        res.status(200).json({
            message : "Good ID"
        })
    } else {
        res.status(200).json({
            message : "Good ID"
        })
    }
});

router.patch("/:productId",(req, res, next)=>{
    res.status(200).json({
        message : "product updated"
    })
});

router.delete("/:productId",(req, res, next)=>{
    res.status(200).json({
        message : "product deleted"
    })
});
module.exports = router;