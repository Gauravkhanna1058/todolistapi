var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  User = require('./api/models/userModel'), //created model loading here
  bodyParser = require('body-parser'),
  cors = require('cors')


  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://gaurav:gaurav@ds155577.mlab.com:55577/mean'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

var routes = require('./api/routes/todoListRoutes'),
 userRoute = require('./api/routes/userRoutes') //importing route
routes(app); //register the route
userRoute(app);


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);