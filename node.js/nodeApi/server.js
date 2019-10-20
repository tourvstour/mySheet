const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { insert, Payback } = require('../nodeApi/apis/insertDB')
const { transport } = require('../nodeApi/apis/dataList')
const { OrderWaiting } = require('../nodeApi/apis/dataBoard')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
})
app.post('/show', async (req, res) => {
    //console.log(req.body)
    var data = await exsql()
    res.json(data)
})
//waiting
app.post('/upload', async (req, res) => {
    var ObjectReturn = await insert(req)
    res.json(ObjectReturn)
})
//payback
app.post('/payback', async (req, res) => {
    var Object = await Payback(req)
})
//บริษัทขนส่ง
app.post('/transport', async (req, res) => {
    var ObjectReturn = await transport()
    // console.log(ObjectReturn)
    res.json(ObjectReturn)
})

app.post('/board', async (req, res) => {
    var boradReturn = await OrderWaiting(req)
    res.json(boradReturn)
})
app.listen(2000, () => {
    console.log("start server api")
})