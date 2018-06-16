/* handles routeing for logged-in users.
*   User routes.
*     /user/search/
*     /user/about/
*     /user/"Voting Poll Title" - permission to add/modify
*/

exports.send = function(req, res, next){
  let border = "=";
  border = border.repeat(87);
  console.log(border);
  res.status(200).set({'content-type':'text/html'});
  res.write('User goto');
  res.end()
}