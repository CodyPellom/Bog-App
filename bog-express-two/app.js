require('dotenv').config()
const express = require('express')
const mogoose = require('mongoose')
const logger = require('morgan')
const bodyParser = require('body-parser')
const app = express()


mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection
db.on('error', err => {
    console.log(err)
})

db.on('open', () => {
     console.log('connected to mongodb')
 })

 app.use(logger('dev'))
 app.use(bodyParser.json())

app.get('/', (req, res) => {
    console.log('hello wurld')
})

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log('listneing on Port ' + PORT)
})

router.get('/', async (req, res) => {
    try{const creatures = await Creature.find({})
res.json(creatures)
} catch (err) {
    console.log(err)
}
})

router.get('/:id', async (req, res) => {
    try {
        const creatureId = req.params.id
        const creature = await Creature.findById(creatureId)
        res.json(creature)
    } catch(err) {
        console.log(err)
        res.json(err)
    } 
})

router.post('/', async (req, res) => {
    try {
        const newCreature = req.body
        const savedCreature = await Creature.create(newCreature)
        res.json(savedCreature)
    }   Catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})

router.put('/:id', async (req, res) => {
    try {
        const creatureId = req.params.id
        const updatedCreature = req.body
        const savedCreature = await Creature.findByIdAndUpdate(creatureId, updatedCreature)
        res.json(savedCreature)
    }   catch (err) {
    console.log(err)
    res.status(500).json(err)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const creatureId = req.params.id
        await Creature.findByIdAndRemove(creatureId)
        res.json({
            msg: 'Successfully Deleted'
        })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
})
