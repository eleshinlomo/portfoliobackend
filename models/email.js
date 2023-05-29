const mongoose = require('mongoose')
const emailSchema = mongoose.Schema({
    subjectid: String,
    emailid: String,
    nameid: String,
    messageid: String
})

const Email = mongoose.model('Email', emailSchema)
module.exports = Email