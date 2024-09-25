const express = require('express');
const app = express();
const dotenv = require('dotenv');

dotenv.config()

require('./config/db')

app.use(express.json());

app.get('/', (req, res)=> {
    res.send('welmcom')
})

PORT = process.env.PORT || 3000;

app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}`)
})