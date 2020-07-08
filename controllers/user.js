/**
 * Created by adrian on 29/08/2018.
 */
'use strict';
const passport = require('passport');
const auth     = require('../models/user');

const userLogin = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        /*if (err) { return res.status(403).json({err: err, authuser: user}); }
        if (!user) { return res.status(403).json({err: err, authuser: user}); }*/
        req.logIn(user, (err) => {
            if (err) { return res.status(403).json({err: err, authuser: user}); }
            res.json(200, {err: null, authuser: user});
        });
    })(req, res, next);
}


const userRegister = (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        /*if (err) { return res.status(403).json({err: err, authuser: user}); }
        if (!user) { return res.status(403).json({err: err, authuser: user}); }*/
        req.userRegister(user, (err) => {
            if (err) { return res.status(403).json({err: err, authuser: user}); }
            res.json(200, {err: null, authuser: user});
        });
    })(req, res, next);
    // passport.use('local-signup', new LocalStrategy({
    //     // by default, local strategy uses username and password, we will override with email
    //     usernameField : 'email',
    //     passwordField : 'password',
    //     passReqToCallback : true // allows us to pass back the entire request to the callback
    // }
}


module.exports.userLogin = userLogin;

module.exports.userLogin = userRegister;