const Staff = require('')
const bcrypt = require('bcrypt')
const idGen = require('./idGen')



const addStaff = async (req, res) => {
    const { firtname, lastname, surname, email, gender, image, title, contact, address, city, state, position } = req.body
    const lenStaff = Staff.find({}).length()

    const password = 'Jethro10'
    const staffId = idGen(0)

    console.log(staffId)
    // confirm data
    if (!staffId || !firtname || !lastname || !surname || !gender || !contact || !password) {
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
            position

        })
        res.json({ message: `new staff ${newStaff.firstname} created ` })

    } catch (error) {
        console.log(error)
    }
}

module.exports = addStaff