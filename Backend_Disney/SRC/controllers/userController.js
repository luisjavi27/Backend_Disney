const userService = require("../services/userService");

const userController = {
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

  getOneUser: async (req, res) => {
    let user = await userService.getOneUser(req.query);

    if (user.error) {
      res.status(user.error.code);
      res.send({ response: user.error.data });
    } else {
      res.status(200);
      res.send(user);
    }
  },

  createUser: async (req, res) => {

    let newUser = await userService.createUser(req.body);

    if (newUser.error) {
      res.status(newUser.error.code);
      res.send({ response: newUser.error.data });
    } else {
      res.status(201);
      res.send(newUser);
    }
  },

  loginUser: async (req, res) => {
    console.log(req.body)
    let user = await userService.loginUser(req.body);

    if (user.error) {
      res.status(user.error.code);
      res.send({ response: user.error.data });
    } else {
      res.status(200);
      res.send(user);
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

module.exports = userController;
