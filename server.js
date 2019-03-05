const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const app = express();
const port = process.env.PORT || 3000;
const validator = require('express-validator')

// database connection goes here
require('./database/mongooseConnection');

require('dotenv').config();

// BODY-PARSER
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(validator());
// override with POST having ?_method=DELETE & ?_method=PUT
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(methodOverride('_method'));
app.use(methodOverride((req, res) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    let method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

// Call in the ROUTES
const mainController = require('./controllers/main');
app.use(mainController);
// const authController = require('./controllers/auth')
// app.use(authController)

app.listen(port, () => {
  console.log(`Port is listening on ${port}`)
});
// for testing
module.exports = {app};
