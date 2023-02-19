const mongoose = require('mongoose')

const CustomerSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please add a username']
    }
}, { 
    name : { 
        type: String, 
        required: [true, 'Please add a name']
    }
})

module.exports = mongoose.model('Customer', CustomerSchema)