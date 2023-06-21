const Staff = require('')
const bcrypt = require('bcrypt')
const idGen = require('./idGen')
const { default: mongoose } = require('mongoose')


// GET ALL STAFF
const getStaffs = async (req, res) => {
    const staffs = await Staff.find({}).sort({createdAt: -1})

    res.status(200).json(staffs)
}
// END GET ALL STAFF

// GET SINGLE STAFF
const getStaff = async (req, res) => {
    const { staffId } = req.params

    const staff = await Staff.findById(staffId)

    if(!staff) {
        return res.status(404).json({error: 'No Staff Found'})
    }
}
// END GET SINGLE STAFF


// ADD NEW STAFF
const addStaff = async (req, res) => {
    const { title, firtname, lastname, surname, email, gender, image, contact, address, city, state, position, role } = req.body
    const lenStaff = Staff.find({}).length()

    const password = 'Jethro10'
    const staffId = idGen(0)

    console.log(staffId)
    // confirm data
    if (!staffId || !firtname || !lastname || !surname || !gender || !contact || !role || !position || !password) {
        res.json({ message: 'All fields are required' })
    }
    const staff = Staff.findOne({ staffId }).exec()
    if (staff) {
        res.json({ message: 'staff with id already exist' })
    }
    try {
        // hash the password with bcrypt
        const hashedPwd = await bcrypt.hash(password, 10)
        const newStaff = await staff.create({
            title,
            firtname,
            lastname,
            surname,
            "password": hashedPwd,
            email,
            gender,
            staffId,
            image,
            title,
            contact,
            address,
            city,
            state,
            position,
            role

        })
        res.json({ message: `new staff ${newStaff.firstname} created ` })

    } catch (error) {
        console.log(error)
    }
}
// END ADD NEW STAFF


// DELETE SINGLE STAFF
const deleteStaff = async (req, res) => {
    const { staffId } = req.params

    if(!mongoose.Types.ObjectId.isValid(staffId))
    {
        return res.status(404).json({error: 'No Such Staff'})
    }

    const staff = await Staff.findOneAndDelete({staffId: staffId})
    
    if(!staff) {
        return res.status(404).json({error: 'No Staff Found'})
    }

    res.status(200).json(staff)
}
// DELETE SINGLE STAFF

module.exports = {getStaffs, getStaff,addStaff, deleteStaff}