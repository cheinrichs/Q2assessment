var knex = require('./knex');

module.exports = function(){
  return knex('books').orderBy('id').then(function(books){
    return knex('books').count('id').then(function(count){
      return knex('books_authors').fullOuterJoin('authors', 'books_authors.author_id', 'authors.id').orderBy('book_id').then(function(joinedGroups){
        // console.log('books');
        // console.log(books);
        // console.log("Joined Groups");
        // console.log(joinedGroups);
        // console.log(joinedGroups.length);
        // console.log(books.length);

        var authorsArray = [];
        //we have an array of objects. Each one has a book id and an authorArr
        //if we can loop through the objects, on every possible book id, grab each author

        //for each of the joined objects
        for (var i = 1; i <= joinedGroups.length; i++) {
          //look at each book id
          var authorArr = [];
          for(var j = 0; j <= joinedGroups.length; j++){
            if(joinedGroups[j]){
              //console.log(joinedGroups[j].book_id);
              //if the book id matches the one in the joined group then push it onto the array
              if(joinedGroups[j].book_id === i){
                //console.log(i + " " + joinedGroups[j].first + " " + joinedGroups[j].last);
                authorArr.push(joinedGroups[j].first + " " + joinedGroups[j].last);
              } else {
                //console.log("problem i: " + i + " j: " + j +" book id: " + joinedGroups[j].book_id );
              }
            }
          }
          authorsArray.push(authorArr.sort());
          // console.log(authorsArray);
        }

        var cleanAuthorsArray = []; //an authors array without any empties
        for (var i = 0; i < authorsArray.length; i++) {
          if(authorsArray[i][0]){
            cleanAuthorsArray.push(authorsArray[i]);
          } else {

          }
        }
        // console.log("clean!");
        // console.log(cleanAuthorsArray);
        // console.log('authorsArray');
        // console.log(authorsArray);

        for (var i = 0; i < books.length; i++) {
          books[i].authors = cleanAuthorsArray[i].join(', ');
        }

        return {
            books: books,
            count: count
        }

      });
    });
  });
}
