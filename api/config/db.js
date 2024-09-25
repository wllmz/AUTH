const mongoose = require('mongoose');

const mondb = async () => {
    try {
        mongoose.connect(process.env.MONGOURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
    } catch (error) {
        console.log ('error connecting to')
    }
}

mondb()