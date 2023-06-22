const mongoose = require('mongoose')
const Schema = mongoose.Schema

const staffSchema = new Schema({
               title: {
                              type: String,
                              required: false
               },
               staffId: {
                              type: String,
                              required: true   
               },
               firstname: {
                              type: String,
                              required: true
               },
               lastname: {
                              type: String,
                              required: false
               },
               surname: {
                              type: String,
                              required: true
               },
               email: {
                              type: String,
                              required: false
               },
               gender: {
                              type: String,
                              required: true
               },
               contact: {
                              type: Number,
                              required: true
               },
               address: {
                              type: String,
                              required: true  
               }, 
               city: {
                              type: String,
                              required: false 
               },
               state: {
                              type: String,
                              required: false
               },
               position: {
                              type: String,
                              required: true     
               },
               role: {
                              type: String,
                              required: true   
               },
               password: {
                              type: String,
                              required: true   
               }

}, {timestamps: true})

const Staff = mongoose.model('staffs', staffSchema)

module.exports = Staff