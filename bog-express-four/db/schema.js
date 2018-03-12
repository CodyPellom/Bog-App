const mongoose = require('mongoose')
const schema = mongoose.schema
const CreatureSchema = new Schema({
    name: String, 
    description: String
})

const Creature = mmongoose.model('Creature', CreatureSchema)

module.exports = {
    Creature
}