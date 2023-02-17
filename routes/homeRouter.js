const express = require('express')
const router = express.Router()
const controller = require('./controller')
const mongoose = require('mongoose')
const User = require('../models/user')

router.get('/users', controller.home)
router.get('/news', controller.getNews)


module.exports = router

