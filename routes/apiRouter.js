const express = require('express')
const router = express.Router()
const controller = require('./controller')
const mongoose = require('mongoose')
const User = require('../models/user')

// Read
router.get('/news/', controller.getNews)


// Create
router.post('/addSaasUsers/', controller.getSaasEmails)


module.exports = router