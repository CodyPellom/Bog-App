require('dotenv').config()


const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const logger = require('morgan');
const db = mongoose.connection
const dotenv = require('dotenv');
const concurrently = require('concurrently');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection

db.on('open', () => {
  console.log('Connected to mongoDB')
})


db.on('error', () => {
    console.log('error connecting to mongoDB')
})


app.use(logger('dev'))
app.use(bodyparser.json())

app.get('/', (req, res) => {
    res.send('hello world')
})

const PORT = process.env.PORT || 3001

app.listen(port, () => {
    console.log('app is up and running on port' + PORT)
})

























// //dependancies
// require ('dotenv').config()


// const mongoose = require('mongoose');
// const logger = require('morgan');
// const bodyparser = require ('body-parser');
// const dotenv = require('dotenv');
// const express = require('express');
// const app = express();
// const concurrently = require('concurrently')

// mongoose.connect(process.env.MONGODB_URI)

// const db = mongoose.connection; 


// db.on('open', () => {
// console.log('Connected to MongoDB')
// })

// db.on('error', () => {
// console.log('Error connecting to MongoDB')
// })


// app.use(logger('dev'))
// app.use(bodyparser.json())
// app.get('/', (req, res) => {
//     res.send('Hello, world!')
// })

























// //dependancies
// require('dotenv').config()
// const express = require('express');
// const mongoose = require('mongoose');
// const bodyparser = require('body-parser');
// const logger = require('morgan');
// const concurrently = require('concurrently');
// const app = express()
// //connection to mongodb
// mongoose.connect(process.env.MONGODB_URI)


// const db = mongoose.connection
// db.on('error', err => {
//     console.log(err)
// })

// db.on('open', () => {
//     console.log('Connected to MongoDB')
// })
// //middleware
// app.use(logger('dev'))
// app.use(bodyparser.json())

// app.get('/', (req, res) => {
//     res.send('hello, world!')
// })

// const PORT = process.env.PORT || 3001

// app.listen(PORT, () => {
//     console.log('App is up and running on port' + PORT)
// })



//listen for port 3000






