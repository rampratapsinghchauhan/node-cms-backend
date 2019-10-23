const express = require('express');
const router = express.Router();
const { User } = require('../../sequelize');
router.get("/",(req, res, next)=>{
    User.findAll().then(users => res.json(users))
});

router.post("/",(req, res, next)=>{
    console.log(req.body);
    User.create(req.body)
        .then(user => res.json(user))
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