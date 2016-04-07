var express = require('express');
var router = express.Router();
var queries = require('../lib');


/* GET users listing. */
router.get('/', function(req, res, next) {
  queries.listAllAuthors().then(function(authors){
    console.log(authors);
    res.render('authors', { authors: authors });
  });
});

router.get('/:id', function(req, res, next){
  queries.showAuthorById(req.params.id).then(function(author){
    console.log(author);
    res.render('author', { authors: author });
  });
});

module.exports = router;
