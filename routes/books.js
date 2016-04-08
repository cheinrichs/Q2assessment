var express = require('express');
var router = express.Router();
var queries = require('../lib');

/* GET users listing. */
router.get('/', function(req, res, next) {
  queries.listAllBooks().then(function(books){
    res.render('books', { books: books.books, count: books.count[0] });
  });
});

router.get('/new', function(req, res, next){
  queries.getAuthors().then(function(authors){
    res.render('newBook', {authors: authors});
  });
});

router.get('/delete/:id', function(req, res, next){
  queries.showBookById(req.params.id).then(function(book){
    console.log('book');
    console.log(book);

    res.render('deleteBook', {book: book});
  });
});


router.get('/deleteBook/:id', function(req, res, next){
  queries.deleteBook(req.params.id).then(function(book){
    res.redirect('/books');
  });
});

router.post('/createNewBook', function(req, res, next){
  queries.createBook(req.body.title, req.body.genre, req.body.description, req.body.coverImageUrl, req.body.authorsChecked).then(function(id){
    res.redirect('/books');
  });
});

router.get('/:id', function(req, res, next){
  queries.showBookById(req.params.id).then(function(book){
    console.log(book);
    res.render('book', {books: book});
  });
});

router.post
queries.createBook.js

module.exports = router;
