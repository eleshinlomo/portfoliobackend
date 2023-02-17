const express = require('express')
const mongoose = require('mongoose')
const User = require('../models/user')
const axios = require('axios')
require('dotenv').config()


let message = ["Building the next revolution"]

exports.home = (req, res)=>{
  res.json({result: message})
}

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

