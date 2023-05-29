const express = require('express')
const router = express.Router()
const controller = require('./controller')
const mongoose = require('mongoose')


// Read
router.get('/news/', controller.getNews)


// Create
router.post('/getemail/', controller.getSaasEmails)



module.exports = router