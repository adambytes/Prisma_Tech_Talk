const express = require('express')
const app = express()
const port = 3001
// prisma
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// json
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Render Html File
app.get('/', function(req, res) {
  return res.status(200).send('Hello World!');
});

app.get('/api', function(req, res) {
  return res.status(200).send('API HELLO WORLD!');
});

app.get('/api/movie', async function(req, res) {
  // retrieve all movies
  const movies = await prisma.movie.findMany()
  return res.status(200).json(movies);
});

app.post('/api/movie', async (req, res, next) => {
  // if(!req.body.title || !req.body.rating) {
  //   res.status(400).send('Missing title or rating');
  //   return next({
  //     status: 400,
  //     message: 'Missing title or rating'
  //   });
  // }
  // // create a new movie
  let movie;
  try{
    movie = await prisma.movie.create({
      data: {
        title: req.body.title,
        rating: req.body.rating,
      },
    })
  }
  catch(err) {
    next(err);
  }

  return res.send(movie)
});

app.patch('/api/movie/:id', async function(req, res) {
  // update a movie
  let movie;
  try{
    movie = await prisma.movie.update({
      where: {
        id: parseInt(req.params.id),
      },
      data: {
        watched: true,
      },
    })
  }
  catch(err) {
    next(err);
  }
  
  movie !== null ? res.status(200).json(movie) : res.status(400).send('Movie not updated');
});



app.delete('/api/movie/:id', async function(req, res) {
  // delete a movie
  let movie;
  try {
    const movie = await prisma.movie.delete({
      where: {
        id: parseInt(req.params.id),
      },
    })
  }
  catch(err) {
    next(err);
  }

  movie !== null ? res.status(200).json(movie) : res.status(400).send('Movie not deleted');

});

// error handling
app.use((err, req, res, next) => {
  const template = {
    status: 500,
    message: 'Internal Server Error',
    error: {}
  }
  const errorObj = Object.assign({}, template, { error: err });
  console.log(errorObj.message);
  return res.status(500).json( errorObj.error );
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})