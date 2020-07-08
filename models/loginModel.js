'user strict';
var sql = require('../db.js');
const express = require("express")

const app = express()
const cors = require('cors')
var bodyParser = require('body-parser')
const nodemailer = require("nodemailer");
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

var User = function(user){
    this.username = user.username;
    this.password = user.password;
    // this.created_at = new Date();
};


function querySingleValue(query, value) {
    
    return new Promise((resolve, reject) => {
        try {
            sql.query(query, [value], (err, rows) => {
                if (err) {
                    return reject(err)
                } else {
                    return resolve(rows)
                }
            })
        } catch (err) {
            return (err)
        }
    })
}
User.loginUser = function (newUser, result) {
    var getQuery="select * from `users` WHERE `username` = ?";    
    querySingleValue(getQuery, newUser.username) 
    .then(response => {
        if(response[0]){
            if (newUser.password !== response[0].password) {
                result('wrong password', null);
            } else {                
                result(null, response[0]);
            }
        } else {
            result('Username and password does not exit', null);
        }
    })
    
};
User.forgotPassword = function (newUser, result) {
    var getQuery="select * from `users` WHERE `username` = ?"; 
    
    querySingleValue(getQuery, newUser.username) 
    .then(response => {
        if(response[0]){
            
            var transporter = nodemailer.createTransport({
                services:'gmail',
                port:465,
                host: 'smtp.gmail.com',
                auth: {
                    user:'ajeet.panwar143@gmail.com',
                    pass:'9001598167'
                } 
             });
             var mailOptions = {
                 from:'ajeet.panwar143@gmail.com',
                 to:'jeetpanwar5@gmail.com',
                 subject:'this is testing subjects for mail send for school erp',
                 text:`this is testing subjects for mail send for school erp`,
                 html: '<b>Hello world ✔</b>'
             };
             
             transporter.sendMail(mailOptions, function(error,infor){
                 if(error){
                     console.log(error);
                 } else {
                     console.log('Email Sent: '+ info.responce);
                 }
             });

            result(null, response[0]);
        } else {
            result('Data does not exit', null);
        }
    })
    
};
module.exports= User;