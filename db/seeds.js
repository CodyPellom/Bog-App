require('dot-env').config()
const mongoose = require('mongoose');
const { Creature } = require('./schema')

mongoose.Promise = global.Promise
mongoose.connect = require('./schema')

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)

const db = mongoose.connection

const saved = async () => {
    await Creature.remove()
const luke = new Creature ({name: 'Luke', decription: 'Jedi'})
await luke.save()
const darth = new Creature({name: 'Darth Vader', description: 'Father'})
await darth.save()
db.close()
}

saved()