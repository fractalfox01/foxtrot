/* handles managment routes GET/POST /manage, /manage/stats, /manage/:poll, /manage/:poll/delete,
* /manage is index 0 in management abstract directory tree. handles creation of new voting polls.
*    Manage routes:
*      /manage/hame - containes stats & list of managed polls
*      /manage/"Voting Poll Title" - permission to delete/modify
*/
const session = require('express-session');

exports.send = function(req, res, next){
  if(!req,session.guest){
    /**
    * Guest cookie is False.
    * Check for auth cookie ( make sure user has obtained token ).
    */
    console.log('auth good.');
    let border = "=";
    border = border.repeat(87);
    console.log(border);
    res.status(200).set({'content-type':'text/html'});
    res.sendFile('/app/views/management.html');
    res.end();
  }else{
    // Access to management denied: guest cookie is True;
    console.log("Guest attempt at management.");
    let border = "=";
    border = border.repeat(87);
    console.log(border);
    res.status(200).set({'content-type':'text/html'});
    res.sendFile('/app/views/management.html');
    res.end();
  }
}