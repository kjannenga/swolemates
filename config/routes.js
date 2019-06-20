//Update the name of the controller below and rename the file.
const template = require("../controllers/template.js");
module.exports = function(app){

  app.get('/', template.index);
  app.get('/login', template.loginPage);
  app.get('/signup', template.signupPage);
  app.post('/login', template.login);
  app.post('/signup', template.signup);
  app.use(authUser);
  app.get('/profile', template.profile);
  app.get('/edit', template.edit);
  app.post('/editProfile', template.editProfile);
  app.get('/logout', template.logout);
  app.get('/gymChat', template.gymChat);
  app.post('/addGymPost', template.addGymPost);
  app.post('/delete/:id', template.deletePost);
  app.post('/deleteEvent/:id', template.deleteEvent);
  app.get('/gymEvents', template.gymEvents);
  app.post('/addGymEvent', template.addGymEvent);
  app.get('/gymEvent/:id', template.gymEvent);
  app.post('/addGymComment/:id', template.addGymEventComment);
  app.get('/gymPost/:id', template.gymPost);
  app.post('/addPostComment/:id', template.addPostComment)
};


function authUser(req, res, next){
  if(!req.session.user){
    res.redirect("/login");
  }else{
    next();
  }
}

