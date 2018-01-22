module.exports = function(app){
    var userlist = require('../controllers/userController');

    // todoList Routes
    app.route('/users')
      .get(userlist.listAllUsers)
      .post(userlist.create_a_user);
  }