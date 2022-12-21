const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer'); 


const app = express();

const cors = require('cors');

app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', 'views');



const adminData = require('./routes/admin');
const userRoutes = require('./routes/user');

app.use(cors());

app.use(adminData.routes);
app.use(userRoutes);


app.listen(5000);