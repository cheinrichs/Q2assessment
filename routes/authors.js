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
  console.log("new author created!");
  res.redirect('/authors');
});

router.get('/:id', function(req, res, next){
  queries.showAuthorById(req.params.id).then(function(author){
    res.render('author', { authors: author });
  });
});

module.exports = router;
