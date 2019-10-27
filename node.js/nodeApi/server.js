const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { insert, Payback } = require('../nodeApi/apis/insertDB')
const { transport } = require('../nodeApi/apis/dataList')
const { ExcessAmount, AbsentAmount, AllOrder, WaitingMonney, PayBackMonney } = require('../nodeApi/apis/dataBoard')
const { Regiter, Login } = require('../nodeApi/apis/Login')

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
//waiting upload
app.post('/upload', async (req, res) => {
    var ObjectReturn = await insert(req)
    res.json(ObjectReturn)
})
//payback upload
app.post('/payback', async (req, res) => {
    var Object = await Payback(req)
})
//บริษัทขนส่ง
app.post('/transport', async (req, res) => {
    var ObjectReturn = await transport()
    res.json(ObjectReturn)
})
//reports
app.post('/allorder', async (req, res) => {
    var allorder = await AllOrder(req)
    res.json(allorder)
})
app.post('/waitingOrder', async (req, res) => {
    var waitingOrder = await WaitingMonney(req)
    res.json(waitingOrder)
})
app.post('/payBackOrder', async (req, res) => {
    var payBackOrder = await PayBackMonney(req)
    res.json(payBackOrder)
})
//error report
app.post('/excess', async (req, res) => {
    var excess = await ExcessAmount(req)
    res.json(excess)
})
app.post('/absent', async (req, res) => {
    var absent = await AbsentAmount(req)
    res.json(absent)
})

app.post('/regiter', async (req, res) => {
    var regiter = await Regiter(req)
    res.json(regiter)
})
app.post('/login', async (req, res) => {
    var login = await Login(req)
    res.json(login)
})

app.listen(2000, () => {
    console.log("start server api")
})