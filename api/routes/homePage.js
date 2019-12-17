const express = require('express');
const router = express.Router();
const { HomePage } = require('../../sequelize');
const { getHomePageContent } = require('../controller/homePageController');

router.get("/", getHomePageContent);

router.post("/", (req, res, next) => {
    const _menuItem = {
        key: req.body.key,
        section: req.body.section,
        title: req.body.title,
        subHead: req.body.subHead,
        number: req.body.number,
        sectionText: req.body.sectionText
    }
    HomePage.create(_menuItem)
        .then(menu => res.status(201).json(menu))
});

router.put("/:homePageKey", (req, res, next) => {
    const menuKey = req.params.homePageKey;
    HomePage.update({
        title: req.body.title,
        subHead: req.body.subHead,
        number: req.body.number,
        sectionText: req.body.sectionText
    }, {
        where: { key: menuKey }
    }).then( (updatedBook)=> {
        res.status(200).json(updatedBook);
    })
        .catch(next)
})

module.exports = router;