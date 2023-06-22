const express = require('express')
const router = express.Router()
const controllers = require('../controllers/staffController')

// STAFF ROUTES

// GET ALL STAFFS
router.get('/staff', controllers.getStaffs)

// GET SPECIFIC STAFF
router.get('/staff/:id', controllers.getStaff)

// ADD NEW STAFF
router.post('/addStaff', controllers.addStaff)

// UPDATE SPECIFIC STAFF
// router.patch('/:id/updateStaff', () => {})

// DELETE SPECIFIC STAFF
router.delete('/:id/deleteStaff', controllers.deleteStaff)


module.exports = router