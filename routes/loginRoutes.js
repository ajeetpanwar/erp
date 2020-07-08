'use strict';
module.exports = function(app) {
  var loginC = require('../controllers/loginController');

  
  app.route('/login')
  .post(loginC.login_a_user);

    app.route('/forgot-password')
      .post(loginC.forgot_password);
  
};