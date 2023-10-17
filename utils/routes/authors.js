const express = require('express');
const router = express.Router();
const pool = require('../../utils/pool');

// Creating an endpoint to create a new author
router.post('/new', async (req, res) => {
    try {
        const {name, email} = req.body;
        console.log(name, email)
    } catch (error) {
        console.log(error, "It's all bad")
    }
})

module.exports = router;