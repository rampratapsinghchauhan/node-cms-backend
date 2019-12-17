module.exports = (sequelize, type) => {
    return sequelize.define('homePage', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        key: type.STRING,
        section: type.STRING,
        title: type.STRING,
        subHead: type.STRING,
        number: type.STRING,
        sectionText: type.STRING
    }) 
}