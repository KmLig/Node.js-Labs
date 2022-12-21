const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');



  


const app = express();
app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
  });
const cors = require('cors');


app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', 'views');



const adminData = require('./routes/admin');
const userRoutes = require('./routes/user');

app.use(cors());

app.use(adminData.routes);
app.use(userRoutes);


app.listen(5000);