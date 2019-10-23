const express = require('express');
const router = express.Router();
const { MenuItems } = require('../../sequelize');
router.get("/",(req, res, next)=>{
    MenuItems.findAll().then(menu => res.json(menu))
});

router.post("/",(req, res, next)=>{
    const _menuItem = {
        title: req.body.title,
        menuUrl: req.body.menuUrl
    }
    MenuItems.create(_menuItem)
        .then(menu => res.status(201).json(menu))
});

router.get('/:menuID',(req, res, next)=>{
    const id = req.params.menuID;
    MenuItems.findAll({
        where: {
            id: id
        }        
    }).then(users => res.status(200).json(users));
}); 

router.delete('/:menuID',(req, res, next)=>{
    const id = req.params.menuID;
    MenuItems.destroy({
        where: {
            id: id
        }        
    }).then(users => res.status(200).json(users));
}); 

module.exports = router;