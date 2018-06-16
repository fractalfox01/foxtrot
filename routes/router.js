/* router export file.
*  Handles router management for server.js through passed object "app"
*/
const user = require('./user');
const manage = require('./manage');
const guest = require('./guest');

// only used here.
const cookie = require('../db_tools/sessionDB');

exports.assignRoute = function(app){
  // setup session parameters.
  cookie.makeSessionStore(app);

  // check for active session.
  cookie.getSessionStatus(app);

  app.get('/',  guest.send);

  // Handle's all non-active sessions (public space).
  app.get('/guest*', guest.send);

  // Handle's active session in public space.
  app.all('/user*', user.send);

  // Handle's active session management (users voting poll's & account).
  app.all('/manage*', manage.send);

  // Send all others to index.
  app.all('*', guest.send);
}