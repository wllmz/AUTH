const mongoose = require('mongoose');

const user = new mongoose.Schema({
username: {
    type : 'string',
    required: true,
    unique: true,
    minlength: 5,
    maxlength: 20
}, 
password : {
    type : 'string',
    required: true,
    minlength: 8,
    maxlength: 50
}, 
email : {
    type : 'string',
    required: true,
    unique: true,
}
})

module.exports = mongoose.model('User', user)