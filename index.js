const path = require('path');
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const sequelize = require("./models/config");
const Profile = require("./models/product");
sequelize.sync().then(async () => {
  console.log("db is ready");

})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'ejs');
require('./routes/routes')(app);

const port=8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});