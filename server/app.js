const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

const app = express();

const cors = require('cors');

app.use(express.json());


const errorController = require('./controllers/error');

/*app.engine('hbs', expressHbs.engine({
    extname: "hbs",
    layoutsDir: 'views/layouts',
    defaultLayout: 'main-layout',
  }));
*/
app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');``
const shopRoutes = require('./routes/shop');

app.use(cors());

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(5000);
