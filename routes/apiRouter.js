const express = require('express')
const router = express.Router()
const controller = require('./controller')
const mongoose = require('mongoose')


// Read
router.get('/news/', controller.getNews)


// Create
router.post('/getemail/', controller.getSaasEmails)
router.post('/addFeedback/', controller.getFeedback)


module.exports = router