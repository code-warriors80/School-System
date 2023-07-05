const express = require('express')
const router = express.Router()
const controllers = require('../controllers/staffController')
const staffAttendance = require('../controllers//staffAttendanceController')

// STAFF ROUTES

// GET
router.get('/', (req, res) => {
    res.json({ msg: 'this route is working' })
})

// GET ALL STAFFS
router.get('/staff', controllers.getStaffs)

// GET SPECIFIC STAFF
router.get('/staff/:id', controllers.getStaff)

// ADD NEW STAFF
router.post('/addStaff', controllers.addStaff)

// UPDATE SPECIFIC STAFF
router.patch('/staff/:id', controllers.updateStaff)

// DELETE SPECIFIC STAFF
router.delete('/staff/:id', controllers.deleteStaff)

// STAFF ATTENDANCE
router.get('/staffAttendance', staffAttendance.getStaff);

module.exports = router