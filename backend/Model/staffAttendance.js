const mongoose = require('mongoose')
const Schema = mongoose.Schema

const staffAttendanceSchema = new Schema({
               staffId: {
                              type: String,
                              required: true   
               },
               timeIn: {
                              type: TimeRanges,
                              required: false
               },
               timeOut: {
                              type: TimeRanges,
                              required: false
               }

}, {timestamps: true})

const staffAttendance = mongoose.model('staffAttendance', staffAttendanceSchema)

module.exports = staffAttendance