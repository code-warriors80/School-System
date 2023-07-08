const mongoose = require('mongoose')
const Schema = mongoose.Schema

const staffAttendanceSchema = new Schema({
               staffId: {
                              type: String,
                              required: true   
               },
               timeIn: {
                              type: Date,
                              required: false
               },
               timeOut: {
                              type: Date,
                              required: false
               }

}, {timestamps: true})

const staffAttendance = mongoose.model('staffAttendance', staffAttendanceSchema)

module.exports = staffAttendance