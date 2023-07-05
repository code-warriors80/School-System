const { default: mongoose } = require('mongoose')
const Staff = require('../Model/staffModel')


const getStaff = async (req, res) => {
               const staffs = await Staff.find().select('-password')
           
               res.status(200).json(staffs)
}

module.exports = {getStaff}