const { MenuItems } = require('../../sequelize');

exports.getMenuItems = (req, res, next)=>{
    let menuItems = MenuItems.findAll().then(menu => res.json(menu));
}