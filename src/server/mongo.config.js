const mongoose = require('mongoose');

const mongoDB = process.env.MONGODB_URI || 'mongodb://localhost:27017/almundo'

mongoose.connect(mongoDB,  { useNewUrlParser: true })
    .then(db => {console.info('::: MongoDB | Almundo conectada')})
    .catch(error => {console.info('::: MongoDB error', error)})

module.exports = mongoose;