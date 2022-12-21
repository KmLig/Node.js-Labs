const express = require('express');

const router = express.Router();
const adminData = require('./admin')

router.get('/users', (req, res, next) => {
    const users = adminData.users;
    res.send(users);
})

module.exports = router;