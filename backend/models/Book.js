const db = require('../db/conn')


const {DataTypes, Sequelize} =require('sequelize')

const Book = db.define("Book",{

    id : {
        type :DataTypes.UUID,
        defaultValue : DataTypes.UUIDV4,
        primaryKey : true,
        allowNull : false
    },

 
  
    name : {
        type:DataTypes.STRING,
        allowNull : false,
    },
    price : {
        type:DataTypes.INTEGER,
        allowNull : false,
    },
    description : {
        type:DataTypes.STRING,
        allowNull : true,
    }

},{tableName : "Book"})

module.exports = Book