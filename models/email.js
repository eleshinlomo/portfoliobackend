const mongoose = require('mongoose')
const emailSchema = mongoose.Schema({
    getSubject: String,
    getEmail: String,
    getName: String,
    getMessage: String
})

const Email = mongoose.model('Email', emailSchema)
module.exports = Email