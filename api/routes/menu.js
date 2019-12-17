const express = require('express');
const router = express.Router();
const { MenuItems } = require('../../sequelize');
const { getMenuItems } = require('../controller/menuController')

router.get("/", getMenuItems);

router.post("/", (req, res, next) => {
    const _menuItem = {
        title: req.body.title,
        key: req.body.key,
        subHead: req.body.subHead,
        menuUrl: req.body.menuUrl
    }
    MenuItems.create(_menuItem)
        .then(menu => res.status(201).json(menu))
});

router.get('/:menuID', (req, res, next) => {
    const id = req.params.menuID;
    MenuItems.findAll({
        where: {
            id: id
        }
    }).then(users => res.status(200).json(users));
});

router.delete('/:menuID', (req, res, next) => {
    const id = req.params.menuID;
    MenuItems.destroy({
        where: {
            id: id
        }
    }).then(users => res.status(200).json(users));
});

router.put("/:menuKey", (req, res, next) => {
    const menuKey = req.params.menuKey;
    // MenuItems.update(
    //     {
    //         title: req.body.title
    //     },
    //     { returning: true, where: {key:req.params.menuKey} }
    // ).then(function([ rowsUpdate, [updatedBook] ]) {
    //     res.json(updatedBook)
    //   })
    //   .catch(next)
    MenuItems.update({
        title: req.body.title,
        subHead: req.body.subHead
    }, {
        where: { key: menuKey }
    }).then( (updatedBook)=> {
        res.status(200).json(updatedBook);
    })
        .catch(next)
})

module.exports = router;