const genreService = require("../services/GenreService");

const genreController = {
  getAllGenres: async (req, res) => {
    let allGenres = await GenreService.getAllGenres();
    if (allGenres.error) {
      res.status(500);
      res.send(allGenres);
    } else {
      res.status(200);
      res.send(allGenres);
    }
  },

  getOneGenre: async (req, res) => {
    let genre = await genreService.getOneGenre(req.params.id);

    if (genre.error) {
      res.status(genre.error.code);
      res.send({ response: genre.error.data });
    } else {
      res.status(200);
      res.send(genre);
    }
  },

  createGenre: async (req, res) => {

    let newGenre = await genreService.createGenre(req.body);

    if (newGenre.error) {
      res.status(newGenre.error.code);
      res.send({ response: newGenre.error.data });
    } else {
      res.status(201);
      res.send(newGenre);
    }
  },

  editGenre: async (req, res) => {
    let { ...data } = req.body;

    let genreEdit = await genreService.editGenre({
      id: req.params.id,
      data: data,
    });

    if (genreEdit.error) {
      res.status(genreEdit.error.code);
      res.send({ response: genreEdit.error.data });
    } else {
      res.status(200);
      res.send(genreEdit);
    }
  },

  deleteGenre: async (req, res) => {
    let deleteGenre = await genreService.deleteGenre(req.params.id);

    if (deleteGenre.error) {
      res.status(deleteGenre.error.code);
      res.send({ response: deleteGenre.error.data });
    } else {
      res.status(200);
      res.send(deleteGenre);
    }
  },

  searchGenres: (req, res) => {
    let searchGenres = GenreService.searchGenres();
    res.send(`search Genre "Query String: ${JSON.stringify(req.query)}"`);
  },
};

module.exports = genreController;
