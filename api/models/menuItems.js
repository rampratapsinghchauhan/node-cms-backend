module.exports = (sequelize, type) => {
    return sequelize.define('menuitems', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        key: type.STRING,
        title: type.STRING,
        subHead: type.STRING,
        menuUrl: type.STRING 
    }) 
}