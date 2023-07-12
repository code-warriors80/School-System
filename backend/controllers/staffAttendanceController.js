const { default: mongoose } = require('mongoose')
const staffAttendance = require('../Model/staffAttendance')


const getStaff = async (req, res) => {
    const staffs = await Staff.find().select('-password')

    res.status(200).json(staffs)
}

const addAttendance = async (req, res) => {
    const { staffId, timeIn, Date } = req.body

    if (!staffId || !TimeIn || Date) {
        return res.status(400).json({ message: 'All fields are required' })
    }
    const attendance = await staffAttendance.findOne({ staffId }).where({ TimeIn }).exec()
    if (attendance) {
        return res.status(400).json({ message: 'Attendance already taken' })
    }

    const newAttendance = await staffAttendance.create({
        staffId, timeIn, Date
    })

    return res.status(200).json({ message: 'New attendance taken' })
}

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
module.exports = { getStaff, deleteAttendance, addAttendance }