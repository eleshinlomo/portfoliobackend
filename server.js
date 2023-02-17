const express = require('express')
const app = express()
const PORT = 3300
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()
const axios = require('axios')





app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use('/api', require('./routes/homeRouter'))



mongoose.connect(process.env.dbURI2, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>app.listen(PORT, ()=>console.log(`Server and Database now connected on ${PORT}`)))
.catch((err)=>console.log('database not connected'))