const Staff = require('../Model/staffModel')
const bcrypt = require('bcrypt')
const idGen = require('./idGen')
const { default: mongoose } = require('mongoose')


// GET ALL STAFF
const getStaffs = async (req, res) => {
    const staffs = await Staff.find().select('-password')

    res.status(200).json(staffs)
}
// END GET ALL STAFF

// GET SINGLE STAFF
const getStaff = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No Such Staff' })
    }

    const staff = await Staff.findById(id).select('-password')

    if (!staff) {
        return res.status(404).json({ error: 'No Staff Found' })
    }
    res.status(200).json(staff)
}
// END GET SINGLE STAFF


// ADD NEW STAFF
const addStaff = async (req, res) => {
    const { title, firstname, lastname, surname, email, gender, contact, dob, address, city, state, position, role } = req.body

    const staffList = await Staff.find().lean()
    const stLength = staffList.length

    const password = 'Jethro10'
    const status = 'Active'
    const staffId = idGen(stLength)


    console.log(req.body)

    // confirm data

    const findStaff = await Staff.findOne({ staffId }).exec()
    if (findStaff) {
        return res.json({ message: 'staff with id already exist' })
    }
    try {
        // hash the password with bcrypt
        const hashedPwd = await bcrypt.hash(password, 10)

        const newStaff = await Staff.create({
            title, firstname, lastname,
            surname, email, gender,
            contact, dob, address, city,
            state, position, role,
            staffId, status, "password": hashedPwd,

        })
        if (newStaff) {
            return res.json({ message: `new staff ${newStaff.firstname} created ` })
        } else {
            return res.status(400).json({ message: 'Invalid user data recieved' })
        }


    } catch (error) {
        console.log(error)
    }
}
// END ADD NEW STAFF

// UPDATE SINGLE STAFF
const updateStaff = async (req, res) => {
    const { id } = req.params
    const { title, firstname,
        lastname, surname, email,
        gender, contact, address, image,
        city, state, position, role, password, status, dob } = req.body


    // confirm data
    if (!id || !firstname || !surname || !email || !gender || !contact || !position || !address || !role.length) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'Bad ID format' })
    }

    // find staff
    const staff = await Staff.findById(id).exec()

    if (!staff) {
        return res.status(404).json({ error: 'No Staff Found' })
    }

    // check for duplicate
    const duplicate = await Staff.findOne({ email }).lean().exec()

    if (duplicate && duplicate?._id.toString() !== id) {
        return res.status(409).json({ message: " Staff with staff-ID already exist" })
    }
    try {

        staff.firstname = firstname
        staff.surname = surname
        staff.gender = gender
        staff.contact = contact
        staff.email = email
        staff.dob = dob
        staff.address = address
        staff.city = city
        staff.state = state
        staff.position = position
        staff.role = role
        staff.image = image
        staff.status = status
        staff.title = title
        staff.lastname = lastname

        if (password) {
            // hash password
            const hashPwd = bcrypt.hash(password, 10)
            staff.password = hashPwd
        }
        const updatedStaff = await staff.save()

        res.json({ message: `${updatedStaff.firstname} updated` })
    } catch (error) {
        console.log(error)
    }
}
// END UPDATE SINGLE STAFF


// DELETE SINGLE STAFF
const deleteStaff = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No Such Staff' })
    }

    const staff = await Staff.findByIdAndDelete({ _id: id })

    if (!staff) {
        return res.status(404).json({ error: 'No Staff Found' })
    }

    res.status(200).json(staff)
}
// DELETE SINGLE STAFF

module.exports = { getStaffs, getStaff, addStaff, updateStaff, deleteStaff }