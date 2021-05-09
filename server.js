require('dotenv').config();
const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Event= require('./api/models/EventModel'),
    bodyParser=require('body-parser'),
    mongo_uri = process.env.DB_CONN;
console.log(mongo_uri)
mongoose.Promise= global.Promise;
mongoose.connect(mongo_uri);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./api/routes/EventRoutes');
routes(app);

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);