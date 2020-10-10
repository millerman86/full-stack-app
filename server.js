const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressjwt = require('express-jwt')
const cors = require('cors')
const path = require('path')
const connectDB = require('./config/db')


const app = express()
require('dotenv').config()

connectDB()

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


app.use('/auth', require('./routes/authRouter'))
// app.use('/api', expressjwt({secret: process.env.SECRET, algorithms: ['RS256']})) // Remember: The token is in the header


app.use(express.static(path.join(__dirname, "client", "build")))
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

app.listen(process.env.PORT || 9000, () => {
    console.log('Server is running on local port 9000');
})