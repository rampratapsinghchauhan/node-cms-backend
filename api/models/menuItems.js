module.exports = (sequelize, type) => {
    return sequelize.define('menuitems', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        title: type.STRING,
        menuUrl: type.STRING
    })
}