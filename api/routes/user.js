const express = require('express');
const router = express.Router();
const { User } = require('../../sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

router.get("/",(req, res, next)=>{
    User.findAll().then(users => res.json(users))
});

router.post("/signup",(req, res, next)=>{
  User.findAll({
    where: {
      name: req.body.name
    }
  }).then(users => {
    if(users.length > 0){
      return res.status(409).json({
        message: "user already exist"
      })
    } else {
      bcrypt.hash(req.body.password, 10, (err, hash)=>{
        if (err) {
          return res.status(500).json({
            error:err
          })
        } else {
          const _user = {
            "name": req.body.name,
            "password": hash
          }
          User.create(_user)
            .then(user => res.json(user))
        }
      })
    }
  })  
});

router.post("/login",(req, res, next)=>{
  User.findAll({
    where: {
      name: req.body.name
    }
  }).then(users => {
    if(users.length > 0){
      bcrypt.compare(req.body.password, users[0].password, (err, result)=>{
        if(err){
          return res.status(401).json({
            message: "Auth Falied"
          })
        }
        if (result) {
          const token = jwt.sign({
            name : req.body.name
          }, process.env.JWT_KEY, {
            expiresIn: "1h"
          })
          return res.status(200).json({
            message: "Auth Successful",
            token:token
          })
        }
      })
    } else {
      return res.status(401).json({
        message: "Auth Falied"
      })
    }
  })  
});
router.get('/:orderID', (req, res, next) => {
    const id = req.params.orderID;
    console.log(id)
    User.findAll({
        where: {
          name: id
        }
      }).then(users => res.json(users));
})

module.exports = router;