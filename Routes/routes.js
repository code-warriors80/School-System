const express = require('express')
const router = express.Router()

// STAFF ROUTES

// GET ALL STAFFS
router.get('/staff', () => {})

// GET SPECIFIC STAFF
router.get('/staff/:id', () => {})

// ADD NEW STAFF
router.post('/addStaff', () => {})

// UPDATE SPECIFIC
router.patch('/:id/addStaff', () => {})

// DELETE SPECIFIC STAFF
router.delete('/:id/Staff', () => {})


module.exports = router