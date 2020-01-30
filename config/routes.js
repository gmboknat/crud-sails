/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  'GET /account': 'AccountController.find',
  'GET /account/:id': 'AccountController.findOne',
  'POST /account': 'AccountController.create',
  'PUT /account/:id' : 'AccountController.update',  
  'DELETE /account/:id' : 'AccountController.destroy'

};
