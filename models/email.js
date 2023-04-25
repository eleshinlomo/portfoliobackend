const mongoose = require('mongoose')
const emailSchema = mongoose.Schema({
    subject: String,
    clientEmail: String,
    clientName: String,
    message: String
})

const Email = mongoose.model('Email', emailSchema)
module.exports = Email