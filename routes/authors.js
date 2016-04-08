var express = require('express');
var router = express.Router();
var queries = require('../lib');


/* GET users listing. */
router.get('/', function(req, res, next) {
  queries.listAllAuthors().then(function(authors){
    res.render('authors', { authors: authors });
  });
});

router.get('/new', function(req, res, next){
  res.render('newAuthor');
});

router.post('/createNewAuthor', function(req, res, next){
  queries.createAuthor(req.body.firstName, req.body.lastName, req.body.biography, req.body.portraitUrl).then(function(id){
    console.log("new author created!");
    console.log(req.body.firstName);
    console.log(req.body.lastName);
    console.log(req.body.portraitUrl);
    console.log(req.body.biography);
    res.redirect('/authors');
  });



});

router.get('/:id', function(req, res, next){
  queries.showAuthorById(req.params.id).then(function(author){
    res.render('author', { authors: author });
  });
});

module.exports = router;
