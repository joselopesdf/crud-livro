
const {Sequelize } =require('sequelize')

const  sequelize = new Sequelize(
'book',
'root','',
{
    host :'localhost',
    dialect :'mysql'

})

try{
    sequelize.authenticate()
    console.log("Conectou ao banco")

}catch(error){
    console.log(`Nao foi possivel conectar ao banco ${error}`)

}

module.exports =sequelize