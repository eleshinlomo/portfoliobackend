const express = require('express')
const mongoose = require('mongoose')
const User = require('../models/user')
const Email = require('../models/email')
const axios = require('axios')
const Feedback = require('../models/feedback')
require('dotenv').config()




exports.getNews = (req, res)=>{
    axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.newsAPI}`)
    .then((result)=>{
        if(!result){
            res.send("No data fetched")
        }else{
            console.log(result.data)
            res.json({news: result.data})
            return result.data
        }
    })
    
}

exports.getFeedback = (req, res)=>{
    const feedback = new Feedback(req.body)
    console.log(feedback)
    feedback.save()
    .then((result)=>{
        res.redirect('/')
    })
}


exports.getSaasEmails = (req, res)=>{
    const newEmail = new Email(req.body)
   console.log(newEmail)
   newEmail.save()
   .then((result)=>{
    res.redirect('/')
   })

}




