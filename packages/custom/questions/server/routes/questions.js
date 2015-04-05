'use strict';

var questions = require('../controllers/questions');

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Questions, app, auth, database) {


  app.route('/questions')
    .get(questions.all)
    .post(auth.requiresLogin, questions.create);
  app.route('/questions/random')
    .get(auth.isMongoId, questions.random);  
  app.route('/questions/:questionId')
    .get(auth.isMongoId, questions.show)
    .put(auth.isMongoId, auth.requiresLogin, questions.update)
    .delete(auth.isMongoId, auth.requiresLogin, questions.destroy);


  app.param('questionId', questions.question);


  app.get('/questions/example/anyone', function(req, res, next) {
    res.send('Anyone can access this');
  });

  app.get('/questions/example/auth', auth.requiresLogin, function(req, res, next) {
    res.send('Only authenticated users can access this');
  });

  app.get('/questions/example/admin', auth.requiresAdmin, function(req, res, next) {
    res.send('Only users with Admin role can access this');
  });

  app.get('/questions/example/render', function(req, res, next) {
    Questions.render('index', {
      package: 'questions'
    }, function(err, html) {
      //Rendering a view from the Package server/views
      res.send(html);
    });
  });
};
