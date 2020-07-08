'use strict';

const mysql = require('mysql');
const config = require('../config/mysql');

const connection = mysql.createConnection(config.configDB);


const _login = (email, password, done) => {
    connection.query("SELECT * FROM `users` WHERE `email` = '" + email + "'", (err, rows) => {
        if (err)
            return done(err);
        if (!rows.length) {
            return done({loginMessage: 'Invalid email or password.'});
        }
        if (!( rows[0].password == password))
            return done({loginMessage: 'Invalid email or password.'});

        return done(null, rows[0]);

    });
}

const _register = (email, password, done) => {
    // find a user whose email is the same as the forms email
		// we are checking to see if the user trying to login already exists
        connection.query("select * from users where email = '"+email+"'",function(err,rows){
			console.log(rows);
			console.log("above row object");
			if (err)
                return done(err);
			 if (rows.length) {
                return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            } else {

				// if there is no user with that email
                // create the user
                var newUserMysql = new Object();
				
				newUserMysql.email    = email;
                newUserMysql.password = password; // use the generateHash function in our user model
			
				var insertQuery = "INSERT INTO users ( email, password ) values ('" + email +"','"+ password +"')";
					console.log(insertQuery);
				connection.query(insertQuery,function(err,rows){
				newUserMysql.id = rows.insertId;
				
				return done(null, newUserMysql);
				});	
            }	
		});

}

const _getUserById = (id, done) => {
    connection.query("SELECT * FROM `users` WHERE `id` = '" + id + "'", (err, rows) => {
        if (err)
            return done(err);
        if (!rows.length) {
            return done({loginMessage: 'User not found.'});
        }
        return done(null, rows[0]);

    });
}


module.exports.login = _login;
module.exports.userRegister = _register;
module.exports.getUserById = _getUserById;