
exports.seed = function(knex, Promise) {
  return Promise.join(
    //Deletes ALL existing entries
    knex('books').del(),
    knex('authors'),
    knex('books_authors').del()
  )
  .then(function(){
    return Promise.join(
      knex('books').insert({title: 'Python In A Nutshell', genre: 'Python', description: 'This book offers Python programmers one place to look when they need help remembering or deciphering the syntax of this open source language and its many powerful but scantily documented modules. This comprehensive reference guide makes it easy to look up the most frequently needed information--not just about the Python language itself, but also the most frequently used parts of the standard library and the most important third-party extensions.', cover_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/python_in_a_nutshell.jpg'}).returning('id'),
      knex('books').insert({title: 'Think Python', genre: 'Python', description: 'If you want to learn how to program, working with Python is an excellent way to start. This hands-on guide takes you through the language a step at a time, beginning with basic programming concepts before moving on to functions, recursion, data structures, and object-oriented design. This second edition and its supporting code have been updated for Python 3.', cover_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/think_python.jpg'}).returning('id'),
      knex('books').insert({title: 'Learning React Native', genre: 'JavaScript', description: 'Get a practical introduction to React Native, the JavaScript framework for writing and deploying fully featured mobile apps that look and feel native. With this hands-on guide, you’ll learn how to build applications that target iOS, Android, and other mobile platforms instead of browsers. You’ll also discover how to access platform features such as the camera, user location, and local storage.', cover_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/learning_react_native.jpg'}).returning('id'),
      knex('books').insert({title: 'You Don\'t Know JS: ES6 & Beyond', genre: 'JavaScript', description: 'No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the "You Don’t Know JS" series, this compact guide focuses on new features available in ECMAScript 6 (ES6), the latest version of the standard upon which JavaScript is built.', cover_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/es6_and_beyond.jpg'}).returning('id'),
      knex('books').insert({title: 'You Don\'t Know JS: Scope & Closures', genre: 'JavaScript', description: 'No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. This concise yet in-depth guide takes you inside scope and closures, two core concepts you need to know to become a more efficient and effective JavaScript programmer. You’ll learn how and why they work, and how an understanding of closures can be a powerful part of your development skillset.', cover_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/scope_and_closures.jpg'}).returning('id'),
      knex('books').insert({title: 'You Don\'t Know JS: Async & Performance', genre: 'JavaScript', description: 'No matter how much experience you have with JavaScript, odds are you don’t fully understand the language. As part of the "You Don’t Know JS" series, this concise yet in-depth guide focuses on new asynchronous features and performance techniques—including Promises, generators, and Web Workers—that let you create sophisticated single-page web applications and escape callback hell in the process.', cover_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/async_and_performance.jpg'}).returning('id')
    )
  }).then(function(books){
    return Promise.join(
      knex('authors').insert({first: 'Alex', last: 'Martelli', bio: 'Alex Martelli spent 8 years with IBM Research, winning three Outstanding Technical Achievement Awards.He then spent 13 as a Senior Software Consultant at think3 inc, developing libraries, network protocols, GUI engines, event frameworks, and web access frontends. He has also taught programming languages, development methods, and numerical computing at Ferrara University and other venues. He\'s a C++ MVP for Brainbench, and a member of the Python Software Foundation. He currently works for AB Strakt, a Python-centered software house in Göteborg, Sweden, mostly by telecommuting from his home in Bologna, Italy. Alex\'s proudest achievement is the articles that appeared in Bridge World (January/February 2000), which were hailed as giant steps towards solving issues that had haunted contract bridge theoreticians for decades.', portrait_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/alex_martelli.jpg'}).returning('id'),
      knex('authors').insert({first: 'Allen B.', last: 'Downey', bio: 'Allen Downey is a Professor of Computer Science at Olin College of Engineering. He has taught at Wellesley College, Colby College and U.C. Berkeley. He has a Ph.D. in Computer Science from U.C. Berkeley and Master\'s and Bachelor\'s degrees from MIT.', portrait_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/allen_downey.jpg'}).returning('id'),
      knex('authors').insert({first: 'Anna', last: 'Ravenscroft', bio: 'Anna Martelli Ravenscroft is an experienced speaker and trainer, with diverse background developing curricula for church, regional transit, disaster preparedness; developing web applications for therapy, learning, fitness; writing technical books, articles and presentations; active member of Open Source community; skilled at translating between IT professionals and end users.', portrait_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/anna_ravenscroft.jpg'}).returning('id'),
      knex('authors').insert({first: 'Bonnie', last: 'Eisenman', bio: 'Bonnie Eisenman is a software engineer at Codecademy, with previous experience at Fog Creek Software and Google. She has spoken at several conferences on topics ranging from ReactJS to musical programming and Arduinos. In her spare time, she enjoys building electronic musical instruments, tinkering with hardware projects, and laser-cutting chocolate. Find her on Twitter as @brindelle.', portrait_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/bonnie_eisenman.jpg'}).returning('id'),
      knex('authors').insert({first: 'Kyle', last: 'Simpson', bio: 'Kyle Simpson is an Open Web Evangelist who\'s passionate about all things JavaScript. He\'s an author, workshop trainer, tech speaker, and OSS contributor/leader.', portrait_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/kyle_simpson.jpg'}).returning('id'),
      knex('authors').insert({first: 'Steve', last: 'Holden', bio: 'Steve Holden Is a consultant, advising clients on system and network architectures and the design and implementation of programmed web systems. He also teaches classes on TCP/IP, network security, database and programming topics, and is the author of "Python Web Programming", the O\'Reilly School of Technology\'s "Certificate series in Python" and O\'Reilly Media\'s "Intermediate Python" video series.', portrait_url: 'https://s3-us-west-2.amazonaws.com/assessment-images/galvanize_reads/photos/steve_holden.jpg'}).returning('id')
    ).then(function (authors) {
      return {
        books: {
          python_in_a_nutshell: books[0][0],
          think_python: books[1][0],
          learning_react_native: books[2][0],
          es6_and_beyond: books[3][0],
          scope_and_closures: books[4][0],
          async_and_performance: books[5][0],
        },
        authors: {
          alex: authors[0][0],
          allen: authors[1][0],
          anna: authors[2][0],
          bonnie: authors[3][0],
          kyle: authors[4][0],
          steve: authors[5][0]
        }
      }
    });
  }).then(function(data){
    return Promise.join(

      knex('books_authors').insert({book_id: data.books.python_in_a_nutshell, author_id: data.authors.alex }),
      knex('books_authors').insert({book_id: data.books.python_in_a_nutshell, author_id: data.authors.anna }),
      knex('books_authors').insert({book_id: data.books.python_in_a_nutshell, author_id: data.authors.steve}),

      knex('books_authors').insert({book_id: data.books.think_python, author_id: data.authors.allen}),

      knex('books_authors').insert({book_id: data.books.learning_react_native, author_id: data.authors.bonnie}),

      knex('books_authors').insert({book_id: data.books.es6_and_beyond, author_id: data.authors.kyle}),
      knex('books_authors').insert({book_id: data.books.scope_and_closures, author_id: data.authors.kyle}),
      knex('books_authors').insert({book_id: data.books.async_and_performance, author_id: data.authors.kyle})
    )
  });
};


// return Promise.join(
//   knex('appearances').del(),
//   knex('movies').del(),
//   knex('actors').del()
// )
// .then(function () {
//   return Promise.join(
//     knex('movies').insert({title: 'Shawshank Redemption', release_year: 1994}).returning('id'),
//     knex('movies').insert({title: 'Bourne Identity', release_year: 2002}).returning('id'),
//     knex('movies').insert({title: 'Back to the Future', release_year: 1985}).returning('id'),
//     knex('movies').insert({title: 'Good Will Hunting', release_year: 1997}).returning('id')
//   )
// }).then(function (movies) {
//   return Promise.join(
//     knex('actors').insert({name: 'Matt Damon', dob: '1970-10-08'}).returning('id'),
//     knex('actors').insert({name: 'Tim Robbins', dob: '1958-10-16'}).returning('id'),
//     knex('actors').insert({name: 'Morgan Freeman', dob: '1937-06-01'}).returning('id'),
//     knex('actors').insert({name: 'Jonah Hill', dob: '1983-12-20'}).returning('id')
//   ).then(function (actors) {
//     return {
//       movies: {
//         shawshankRedemption: movies[0][0],
//         bourneIndentity: movies[1][0],
//         backToTheFuture: movies[2][0],
//         goodWillHunting: movies[3][0],
//       },
//       actors: {
//         matt: actors[0][0],
//         tim: actors[1][0],
//         morgan: actors[2][0],
//         jonah: actors[3][0],
//       }
//     }
//   });
// }).then(function (data) {
//   return Promise.join(
//     knex('appearances').insert({
//       actor_id: data.actors.matt,
//       movie_id: data.movies.bourneIndentity,
//       character: 'Jason Bourne'
//     }),
//     knex('appearances').insert({
//       actor_id: data.actors.matt,
//       movie_id: data.movies.goodWillHunting,
//       character: 'Will Hunting'
//     }),
//     knex('appearances').insert({
//       actor_id: data.actors.morgan,
//       movie_id: data.movies.shawshankRedemption,
//       character: 'Red'
//     }),
//     knex('appearances').insert({
//       actor_id: data.actors.tim,
//       movie_id: data.movies.shawshankRedemption,
//       character: 'Andy Dufrane'
//     })
//   )
// })
// );
