const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const axios = require('axios')
const PORT = process.env.PORT || 3300





app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use('https://portbackend.herokuapp.com/api', require('./routes/apiRouter'))




mongoose.connect(process.env.dbURI2, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>app.listen(PORT, ()=>console.log(`Server and Database now connected on ${PORT}`)))
.catch((err)=>console.log('database not connected'))