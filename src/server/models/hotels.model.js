const mongoose = require('mongoose');
const {Schema} = mongoose;

/*
BASE MODEL
----
"idHotel": "249942",
"name": "Hotel Stefanos",
"stars": 3,
"price": 994.18,
"image": "4900059_30_b.jpg",
"amenities": ["safety-box","nightclub","deep-soaking-bathtub","beach","business-center"]
*/

const hotelSchema = new mongoose.Schema({
    uid: {
        type: Number,
        required: 'UID requerido'
    },
    name: {
        type: String,
        trim: true,
        index: true,
        required: 'Please enter a book name'
    },
    price: {
        type: Number,
        trim: true,
    },
    image: {
        type: String,
        trim: true,
    },
    stars: {
        type: Number,
        trim: true
    },
    amenities: [{
        type: Schema.Types.Mixed
    }],
    created: { 
        type: Date,
        default: Date.now
    }
});

//animalSchema.index({ name: 1});
  
module.exports = mongoose.model('Hotel', hotelSchema);