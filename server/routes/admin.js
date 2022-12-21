const path = require('path');
const rootDir = require('../util/path');

const express = require('express');

const router = express.Router();

const users = ["An", "Binh"];

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'admin.html'));
    //res.send(users);
})

router.post('/', (req, res, next) => {    
    console.log(typeof req.body !== "undefined" && req.body !== null)
    console.log(req.body.user);
    users.push(req.body.user);
    res.send(users);
})

exports.routes = router;
exports.users = users;