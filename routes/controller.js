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

exports.getFinancialData = (req, res)=>{

axios.get('https://api.artic.edu/api/v1/artworks', {
    method: 'GET',
    mode: "cors",
})
.then(function (response) {
	if(!response){
        console.log("no data found")
    }else{
        console.log(response.data)
        res.json({items: response.data})
        return response.data
    }
}).catch(function (error) {
	console.error(error);
});

}

