var mongoose = require('mongoose'),
User = mongoose.model('User');

exports.listAllUsers = function(req, res) {
      User.find({}, function(err, User){
        if(err)
            res.send(err);
        res.json(User);
      });
};

exports.create_a_user = function(req, res) { 
    var newUser = new User(req.body);
    newUser.save(function(err, task) {
      if (err)
        res.send(err);
      res.json(task);
    });
}

