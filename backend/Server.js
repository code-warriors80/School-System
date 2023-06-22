require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./config/connectDB')
const app = express()
const routes = require('./Routes/route')

const PORT = process.env.PORT || 3500

console.log(process.env.NODE_ENV)
// DATABASE CONNECTION
connectDB()

// MIDDLEWARE
app.use('/api/v1', routes)

// server and database connections
mongoose.connection.once('open', () => {
    console.log('connected to mongoDB')
    app.listen(PORT, console.log(`server running on port ${PORT}`))
})

mongoose.connection.on('error', (err) => {
    console.log(err)
})
// app.listen(PORT, console.log(`server running on port ${PORT}`))