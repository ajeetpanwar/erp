"use strict";
const nodemailer = require("nodemailer");
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

module.exports= transporter;