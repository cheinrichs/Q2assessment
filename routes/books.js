var express = require('express');
var router = express.Router();
var queries = require('../lib');

/* GET users listing. */
router.get('/', function(req, res, next) {
  queries.listAllBooks().then(function(books){
    console.log(books);
    res.render('books', {books: books});
  });
});

router.get('/:id', function(req, res, next){
  queries.showBookById(req.params.id).then(function(book){
    console.log(book);
    res.render('books', {books: book});
  });
});

module.exports = router;
