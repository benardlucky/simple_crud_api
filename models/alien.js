const mongoose = require('mongoose')

const alienSchema = new mongoose.Schema({ 
    surname: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    sub: {
        type: Boolean,
        required: true,
        default: false
    }

})

module.exports = mongoose.model('Alien',alienSchema)