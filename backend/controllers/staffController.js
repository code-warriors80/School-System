const Staff = require('../Model/staffModel')
const bcrypt = require('bcrypt')
const idGen = require('./idGen')
const { default: mongoose } = require('mongoose')


// GET ALL STAFF
const getStaffs = async (req, res) => {
    const staffs = await Staff.find()

    res.status(200).json(staffs)
}
// END GET ALL STAFF

// GET SINGLE STAFF
const getStaff = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error: 'No Such Staff'})
    }

    const staff = await Staff.findById(id)

    if(!staff) {
        return res.status(404).json({error: 'No Staff Found'})
    }
}
// END GET SINGLE STAFF


// ADD NEW STAFF
const addStaff = async (req, res) => {
    const { title, firstname, lastname, surname, email, gender,  contact, address, city, state, position, role } = req.body

    const password = 'Jethro10'
    const status = 'Active'
    const staffId = idGen(0)
    let emptyField = []

    console.log(staffId)

    // confirm data
    if(!firstname)
    {
        emptyField.push('firstname')
    }
    if(!surname)
    {
        emptyField.push('lastname')
    }
    if(!gender)
    {
        emptyField.push('gender')
    }
    if(!contact)
    {
        emptyField.push('contact')
    }
    if(!position)
    {
        emptyField.push('position')
    }
    if(!role)
    {
        emptyField.push('role')
    }
    if(!password)
    {
        emptyField.push('password')
    }

    if(emptyField.length > 0)
    {
        return res.status(400).json({error: 'Please fill in all fields'})
    }

    const staff = Staff.findOne({ staffId }).exec()
    
    if (staff) {
        res.json({ message: 'staff with id already exist' })
    }
    try {
        // hash the password with bcrypt
        const hashedPwd = await bcrypt.hash(password, 10)

        const newStaff = await staff.create({
            title, firstname, lastname, surname, email, gender,  contact, address, city, state, position, role, staffId, "password": hashedPwd, status
        })

        res.json({ message: `new staff ${newStaff.firstname} created ` })
        
    } catch (error) {
        console.log(error)
    }
}
// END ADD NEW STAFF

// UPDATE SINGLE STAFF
const updateStaff = async (req, res) => {
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error: 'No Such Staff'})
    }

    const staff = await Staff.findByIdAndUpdate(id)

    if(!staff) {
        return res.status(404).json({error: 'No Staff Found'})
    }

    res.status(200).json(staff)
}
// END UPDATE SINGLE STAFF


// DELETE SINGLE STAFF
const deleteStaff = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id))
    {
        return res.status(404).json({error: 'No Such Staff'})
    }

    const staff = await Staff.findOneAndDelete({_id: id})
    
    if(!staff) {
        return res.status(404).json({error: 'No Staff Found'})
    }

    res.status(200).json(staff)
}
// DELETE SINGLE STAFF

module.exports = {getStaffs, getStaff, addStaff, updateStaff ,deleteStaff}