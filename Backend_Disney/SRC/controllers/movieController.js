const movieService = require("../services/movieService");

const movieController = {
  getAllMovies: async (req, res) => {
    let allmovies = await movieService.getAllMovies();
    if (allmovies.error) {
      res.status(500);
      res.send(allmovies);
    } else {
      res.status(200);
      res.send(allmovies);
    }
  },

  getOneMovie: async (req, res) => {
    let movie = await movieService.getOneMovie(req.params.id);

    if (movie.error) {
      res.status(movie.error.code);
      res.send({ response: movie.error.data });
    } else {
      res.status(200);
      res.send(movie);
    }
  },

  createMovie: async (req, res) => {
    let newMovie = await movieService.createMovie(req.body);

    if (newMovie.error) {
      res.status(newMovie.error.code);
      res.send({ response: newMovie.error.data });
    } else {
      res.status(201);
      res.send(newMovie);
    }
  },

  editMovie: async (req, res) => {
    let { ...data } = req.body;

    let movieEdit = await movieService.editMovie({
      id: req.params.id,
      data: data,
    });

    if (movieEdit.error) {
      res.status(movieEdit.error.code);
      res.send({ response: movieEdit.error.data });
    } else {
      res.status(200);
      res.send(movieEdit);
    }
  },

  deleteMovie: async (req, res) => {
    let deleteMovie = await movieService.deleteMovie(req.params.id);

    if (deleteMovie.error) {
      res.status(deleteMovie.error.code);
      res.send({ response: deleteMovie.error.data });
    } else {
      res.status(200);
      res.send(deleteMovie);
    }
  },

  searchMovies: (req, res) => {
    let searchMovies = movieService.searchMovies();
    res.send(`search movie "Query String: ${JSON.stringify(req.query)}"`);
  },
};

module.exports = movieController;
