const { HomePage } = require('../../sequelize');

exports.getHomePageContent = (req, res, next)=>{
    let homePage = HomePage.findAll().then(menu => res.json(menu));
}