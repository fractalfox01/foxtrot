const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

exports.makeSessionStore = function(app){
  app.use(session({
    store: new MongoStore({
      url: process.env.URL
      // ttl:  30 * 60 * 60 // = half an hour
    }),
    secret: process.env.CUBE,
    cookie: {
            expires: new Date(Date.now() + ( 30* 24 * 60 * 60 * 1000)) // 30 days
        },
    resave: true,
    saveUninitialized: true
  }));
}

exports.getSessionStatus = function(app){
  app.all('*', function(req, res, next){

    if(!req.session.github_active && !req.session.gmail_active){
      let border = "=";
      border = border.repeat(87);
      console.log(border);
      console.log("No Account Cookie Found");
      if(!req.session.guest){
        console.log("New Visitor");
        req.session['guest'] = true;
      }else{
        console.log("Returning Session Expires On", req.session.cookie['_expires']);
      }
      console.log(req.originalUrl);
      console.log("forwarded for", req.headers['x-forwarded-for']);
      next();
    }else{
      console.log("Found Account cookie!");
      req.session.guest = false;
      next();
    }
  });
}