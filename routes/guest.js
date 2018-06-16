// handles all requests where the user is "Guest status"
/*  guest routes:
*     /guest/search
*     /guest/about
*     /guest/"Voting Poll Title"
*/
exports.send = function(req, res, next){
  // Sending to index.html
  res.status(200).set({'content-type':'text/html'});
  res.sendFile('/app/views/index.html');
  res.end()
  let border = "=";
  border = border.repeat(87);
  console.log(border);
}