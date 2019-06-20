const knex = require("../db/knex.js");
const moment = require('moment');


module.exports = {

  // CHANGE ME TO AN ACTUAL FUNCTION
  index: function(req, res) {
    res.render('index', {user:req.session.user});
  },
  loginPage: function(req, res) {
    res.render('login');
  },
  signupPage: function(req, res) {
    knex('gyms').then((results)=>{
        res.render('signup', {gyms: results});
    })
  },
  signup: function(req,res){
    knex('users').insert({
      name: req.body.name,
      email: req.body.email,
      bio: req.body.bio,
      imgUrl: req.body.imgUrl,
      age: req.body.age,
      password: req.body.password,
      gymId: req.body.gymId,
      isAdmin: 0
    }).then(()=>{
      res.redirect('/login')
    })
  },
  login: function(req,res){
    knex('users').where('email', req.body.email).then((results)=>{
      let user = results[0];
      if(user.password === req.body.password){
        req.session.user = user;
        res.redirect('/profile')
      }else{
        res.redirect('/index');
      }
    })
  },
  profile: function(req,res){
    knex('gyms').where('id', req.session.user.gymId).then((results)=> {
      knex('gymPosts').where('gymId', req.session.user.gymId).then((postResults)=> {
        knex('gymComments').then((commentResults)=> {
          knex('gymEvents').where('gymId', req.session.user.gymId).then((eventResults)=> {
            knex('gymEventComments').then((eventCommentResults)=> {
          knex('users').then((userResults) => {
            res.render('profile', {
              moment:moment,
              user: req.session.user,
              gyms: results[0],
              posts: postResults,
              comments: commentResults,
              events: eventResults,
              eventComments: eventCommentResults,
              people: userResults
            })
          })

            });
          })
        })
      })
    })
  },
  members: function (req,res){
    knex('users').where('gymId', req.session.user.gymId).then((userResults) => {
      res.render('members', {
        user: req.session.user,
        people: userResults
      })
    })
  },
  deleteUser: function (req,res){
    knex('users').where('id', req.params.id).del()
        .then(() =>{
          res.redirect('/members')
        })
  },
  edit: function (req,res){
    knex('gyms').then((results)=>{
      knex('users').where('id', req.session.user.id).then( () => {
        res.render('editProfile', {user: req.session.user, gyms:results})
      })
    })
  },
  editProfile: function(req,res){
    knex('users').where('id', req.session.user.id).update({
      name: req.body.name,
      email: req.body.email,
      bio: req.body.bio,
      imgUrl: req.body.imgUrl,
      age: req.body.age,
      password: req.body.password,
      gymId: req.body.gymId,
    }).then(() =>{
      res.redirect('/profile')
    })
  },
  logout: (req, res) => {
    req.session.destroy(function (err) {
      if(err){throw err}
      res.redirect('/');
    })
  },

  gymChat: (req,res) =>{
    knex('gyms').where('id', req.session.user.gymId).then((results)=> {
      knex('gymPosts').where('gymId', req.session.user.gymId).then((postResults)=> {
        knex('gymComments').then((commentResults)=> {
          knex('users').then((userResults) => {
              res.render('gymChat', {
                user: req.session.user,
                gyms: results[0],
                posts: postResults,
                comments: commentResults,
                people: userResults
              });
          })
        })
      })
    })
  },
  gymEvents: (req,res) =>{
    knex('gyms').where('id', req.session.user.gymId).then((results)=> {
      knex('gymEvents').where('gymId', req.session.user.gymId).then((eventResults)=> {
        knex('gymEventComments').then((commentResults)=> {
          knex('users').then((userResults) => {
            res.render('gymEvents', {
              moment:moment,
              user: req.session.user,
              gyms: results[0],
              events: eventResults,
              comments: commentResults,
              people: userResults
            });
          })
        })
      })
    })
  },
  deletePost: function(req,res){
    knex('gymPosts').where('id', req.params.id).del()
        .then(() =>{
          res.redirect('/gymChat')
        })
  },
  deleteEvent: function(req,res){
    knex('gymEvents').where('id', req.params.id).del()
        .then(() =>{
          res.redirect('/gymEvents')
        })
  },
  addGymPost: function (req,res){
    knex('gymPosts').insert({
      title: req.body.title,
      post: req.body.post,
      gymId: req.session.user.gymId,
      userId:req.session.user.id
    }).then(()=>{
      res.redirect('/gymChat')
    })
  },
  addGymEvent: function (req,res){
    knex('gymEvents').insert({
      title: req.body.title,
      eventInfo: req.body.eventInfo,
      date: req.body.date,
      intensity: req.body.intensity,
      gymId:req.session.user.gymId
    }).then(()=>{
      res.redirect('/gymEvents')
    })
  },
  gymEvent: function (req,res){
    knex('gymEvents').where('id', req.params.id).then((results) =>{
      knex('users').then((userResults) => {
        knex('gymEventComments').where('eventId', req.params.id).then( (commentResults) => {
          res.render('gymEvent', {
            moment:moment,
            user: req.session.user,
            events: results[0],
            comments: commentResults,
            people: userResults
          })
        })
      })
    })
  },
  addGymEventComment: function (req,res){
    knex('gymEventComments').insert({
      comment: req.body.comment,
      eventId: req.params.id,
      userId: req.session.user.id
    }).then(()=>{
      res.redirect(`/gymEvent/${req.params.id}`)
    })
  },
  gymPost: function (req,res){
    knex('gymPosts').where('id', req.params.id).then((results) =>{
      knex('users').then((userResults) => {
        knex('gymComments').where('postId', req.params.id).then( (commentResults) => {
          res.render('gymPost', {
            user: req.session.user,
            post: results[0],
            comments: commentResults,
            people: userResults
          })
        })
      })
    })
  },
  addPostComment: function (req,res){
    knex('gymComments').insert({
      comment: req.body.comment,
      postId: req.params.id,
      userId: req.session.user.id
    }).then(()=>{
      res.redirect(`/gymPost/${req.params.id}`)
    })
  },
  userProfile: function (req,res){
    knex('users').where('id', req.params.id).then( (results) => {
      knex('gymPosts').where('userId', req.params.id).then( (posts) => {
        res.render('userProfile', {user: req.session.user, person: results[0], posts})
      })
    })
  },

};


