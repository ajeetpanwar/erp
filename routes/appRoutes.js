'use strict';
module.exports = function(app) {
  var appC = require('../controllers/appController');

  // users Routes
  app.route('/users')
    .get(appC.list_all_users)
    .post(appC.create_a_user);
   
  app.route('/users/:id')
    .get(appC.read_a_user)
    .put(appC.update_a_user)
    .delete(appC.delete_a_user);
  
    app.route('/login')
    .get(appC.read_a_user)
    .put(appC.update_a_user)
    .delete(appC.delete_a_user);
};