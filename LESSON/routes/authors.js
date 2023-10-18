const express = require('express');
const router = express.Router();
const pool = require('../utils/pool');

// Creating an endpoint to create a new author
router.post('/new', async (req, res) => {
    try {
        const {name, email} = req.body;
        // Insert into THE TABLE OF authors, the name & email that I get from the body (L8) at the value position $1 (name) and $2 (email) and then you return what you added
        const query = 'INSERT INTO authors (name,email) VALUES ($1,$2) RETURNING *'
        const values = [name, email];
        // Lesson timestamp 1:02:15 for ↓
        const result = await pool.query(query, values);
        return res.json(result.rows[0]);
    } catch (error) {
        console.log(error, "It's all bad")
        res.status(500).json({error: "There was an error while creating the user"})
    }
})

module.exports = router;