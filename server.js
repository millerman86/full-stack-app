const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressjwt = require('express-jwt')
const cors = require('cors')
const path = require('path')

const app = express()
require('dotenv').config()


app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

app.use(express.static(path.join(__dirname, "client", "build")))

app.use('/auth', require('./routes/authRouter'))

mongoose.connect(
    process.env.DATABASE_URL || 'mongodb://localhost:27017/full-stack-app', // all collections will go into one database entry
    {
        useNewUrlParser: true, 
        useUnifiedTopology: true, 
        useCreateIndex: true,
        useFindAndModify: false
    }, 
    () => console.log('Connected to the DB')
)

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


app.listen(process.env.PORT || 9000, () => {
    console.log('Server is running on local port 9000');
})