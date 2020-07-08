'use strict';

var LoginModel = require('../models/loginModel');


const jwt = require("jsonwebtoken");
const SECRETKEY = 'Vertex@1234';


exports.login_a_user = function(req, res) {
  var new_login = new LoginModel(req.body);
  
  // //handles null error 
   if(!new_login.username){
        res.status(400).send({ error:true, message: 'Please provide user/status' });
        }
  else {  
    LoginModel.loginUser(new_login, function(err, login) {         
      if(login) {
        const user = {
            username:login.username,
        }
        jwt.sign({user},SECRETKEY, (err, token)=>{
          if(err) {
              res.sendStatus(403)
          } else {
              res.json({
                  token,
                  message:"User Successfully Login",
                  status:200
              });
          }
        }); 
      } else {
        res.json({
          status:503,
          message:err
        })
      } 
    });
  }
};
exports.forgot_password = function(req, res) {
  var new_login = new LoginModel(req.body);
  
  // //handles null error 
   if(!new_login.username){
        res.status(400).send({ error:true, message: 'Please provide username/mobile/email' });
        }
  else {  

    LoginModel.forgotPassword(new_login, function(err, login) {         
      if(login) {
        const user = {
            username:login.username,
        }
        jwt.sign({user},SECRETKEY, (err, token)=>{
          if(err) {
              res.sendStatus(403)
          } else {
              LoginModel.randomString(5, function(resultString){
                console.log(resultString)
              })
              res.json({
                  token,
                  message:"User Successfully Login",
                  status:200,
              });
          }
        }); 
      } else {
        res.json({
          status:503,
          message:err
        })
      } 
    });
  }
};


