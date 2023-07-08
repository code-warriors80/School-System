const { default: mongoose } = require('mongoose')
const staffAttendance = require('../Model/staffAttendance')
const Staff = require('../Model/staffModel')


const getStaff = async (req, res) => {
    const staffs = await Staff.find().select('-password')

    res.status(200).json(staffs)
}


// DELETE ATTENNDANCE

const deleteAttendance = async (req, res) => {
    const { staffId, timeIn } = req.body

    const attendance = await staffAttendance.find({ staffId, timeIn }).exec()
    if (!attendance) {
        return res.status(404).json({ message: 'Attendance not found' })
    }

    try {
        const result = await staffAttendance.findOneAndDelete({ staffId, timeIn }).exec()
        return res.status(200).json({ message: 'Attendance deleted from database' })
    } catch (error) {
        console.log(error)
    }
}
module.exports = { getStaff, deleteAttendance }