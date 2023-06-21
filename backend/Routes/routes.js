const express = require('express')
const router = express.Router()

// STAFF ROUTES

// GET ALL STAFFS
router.get('/staff', () => {})

// GET SPECIFIC STAFF
router.get('/staff/:id', () => {})

// ADD NEW STAFF
router.post('/addStaff', () => {})

<<<<<<< HEAD
// UPDATE SPECIFIC
=======
// UPDATE SPECIFIC STAFF
>>>>>>> 3ea7b530f7462bf55852e26c6d8bbf048d1f2e9d
router.patch('/:id/addStaff', () => {})

// DELETE SPECIFIC STAFF
router.delete('/:id/Staff', () => {})


module.exports = router