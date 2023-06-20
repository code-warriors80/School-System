require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./config/connectDB')
const app = express()

const PORT = process.env.PORT || 3500

// DATABASE CONNECTION
connectDB()

// MIDDLEWARE
app.use('/api/v1/staff', require('./Routes/routes'))

// server and database connections
mongoose.connection.on('connection', () => {
    console.log('connected to mongoDB')
    app.listen(PORT, console.log(`server running on port ${PORT}`))
})

mongoose.connection.once('error', (err) => {
    console.log(err)
})
// app.listen(PORT, console.log(`server running on port ${PORT}`))