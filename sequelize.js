const Sequelize = require('sequelize')
const UserModel = require('./api/models/user')
const MenuModel = require('./api/models/menuItems')

const sequelize = new Sequelize('cms_db','root','root',{
    host: 'localhost',
    dialect: 'mysql',
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
})

sequelize.sync({ force: false })
    .then(() => {
        console.log(`Database & tables created!`)
    })
const User = UserModel(sequelize, Sequelize)
const MenuItems = MenuModel(sequelize, Sequelize)
  module.exports = {
    User, MenuItems
  }