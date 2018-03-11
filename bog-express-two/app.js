require('dotenv').config()

const app = express()
const logger = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
const db = mongoose.connection

db.on('error', err => {
    console.log(err)
})

db.on('open', () => {
console.log('connected to MOngoDB')
})

app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('hello, wurld')
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log('app is up and running on port ' + PORT)
})

