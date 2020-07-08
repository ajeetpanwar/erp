'use strict';

var UserModel = require('../models/appModel');

exports.list_all_users = function(req, res) {
  UserModel.getAllUser(function(err, user) {

    console.log('controller')
    if (err)
      res.send(err);
      console.log('res', user);
    res.send(user);
  });
};



exports.create_a_user = function(req, res) {
  var new_user = new UserModel(req.body);
  console.log(new_user)
  //handles null error 
   if(!new_user.username || !new_user.mobile){

            res.status(400).send({ error:true, message: 'Please provide user/status' });

        }
else{
  
  UserModel.createUser(new_user, function(err, user) {
    
    if (err)
      res.send(err);
    res.json(user);
  });
}
};


exports.read_a_user = function(req, res) {
  UserModel.getUserById(req.params.id, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.update_a_user = function(req, res) {
  UserModel.updateById(req.params.id, new UserModel(req.body), function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};


exports.delete_a_user = function(req, res) {


  UserModel.remove( req.params.id, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });
};