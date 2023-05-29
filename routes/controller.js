const express = require('express')
const mongoose = require('mongoose')
const User = require('../models/user')
const Email = require('../models/email')
const axios = require('axios')
const Feedback = require('../models/feedback')
require('dotenv').config()




exports.getNews = async (req, res)=>{
    await axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.newsAPI}`)
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




exports.getSaasEmails = async (req, res)=>{

  const { getSubject, getEmail, getName, getMessage } = req.body;
  const newEmail = await new Email({

    subjectid: getSubject,
    emailid: getEmail,
    nameid: getName,
    messageid: getMessage
    
  })
   console.log(newEmail)
   await newEmail.save()
   .then((result)=>{
    if(!result)
    res.status(406).send({message: "Email not sent"})
   })
   return res.status(200).send({message: "Your email was sent"})

}




