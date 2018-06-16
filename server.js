const express = require('express');
const app = express();

const route = require('./routes/router.js');

const port = process.argv[2] || 3000;

// Routing management gets handed off to /routes/router.js
route.assignRoute(app);

app.listen(port, function(){
  console.log("Server started on port", port);
});
