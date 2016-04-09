var express = require('express');
var router = express.Router();
var queries = require('../lib');


/* GET users listing. */
router.get('/', function(req, res, next) {
  queries.listAllAuthors().then(function(authors){
    res.render('authors', { authors: authors.authors, count: authors.count[0] });
  });
});

router.post('/results', function(req, res, next){
  queries.listSomeAuthors(req.body.limitDropdown).then(function(authors){
    res.render('authors', { authors: authors.authors, count: authors.count[0]})
  });
});

router.get('/new', function(req, res, next){
  res.render('newAuthor');
});

router.get('/delete/:id', function(req, res, next){
  queries.showAuthorById(req.params.id).then(function(authors){
    res.render('deleteAuthor', { author: authors.author, books: authors.books });
  });
});

router.get('/deleteAuthor/:id', function(req, res, next){
  queries.deleteAuthor(req.params.id).then(function(author){
    res.redirect('/authors');
  });
});

router.get('/edit/:id', function(req, res, next){
  queries.showAuthorById(req.params.id).then(function(authors){
    res.render('editAuthor', { author: authors.author, books: authors.book });
  });
});

router.post('/submitEdits/:id', function(req, res, next){
  queries.editAuthor(req.params.id, req.body.firstName, req.body.lastName, req.body.biography, req.body.portraitUrl).then(function(){
    res.redirect('/authors');
  });
});

router.post('/createNewAuthor', function(req, res, next){
  queries.createAuthor(req.body.firstName, req.body.lastName, req.body.biography, req.body.portraitUrl).then(function(id){
    res.redirect('/authors');
  });
});

router.get('/:id', function(req, res, next){
  queries.showAuthorById(req.params.id).then(function(author){
    console.log(author);
    res.render('author', { authors: author });
  });
});

module.exports = router;
