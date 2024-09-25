const mongoose = require('mongoose') 

const user = new mongoose.Schema({
    username: {
        type : 'string',
        required : true,
        unique : true
    }, 
    email: {
        type : 'string',
        required : true,
        unique : true
    }, 
    passwords: {
        type: 'string',
        required: true
    }
});

module.exports = mongoose.model('toto', user);


module.exports = mongoolse.model('toto', user)