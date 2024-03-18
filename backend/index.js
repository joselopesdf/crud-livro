const express = require("express")
const cors = require("cors")
require('dotenv').config()
const app = express()
const Port = process.env.Port || 3500



const conn = require("./db/conn")


const Book = require("../backend/models/Book")


const BookRoutes = require("../backend/routes/BookRoutes")

app.use(cors(
  {
    origin : 'http://localhost:5173',
    methods : ['GET,POST,PUT,DELETE'],
    allowHeaders : ['Content-Type'],
    

  }
))
app.use(express.json())

app.use(
  express.urlencoded({
      extended :true
  })

)
app.use("/books",BookRoutes)

  


conn.sync()
.then(()=>{
  app.listen(Port)

})
.catch((err)=>console.log(err))

