import db from "../database/index.js";

const movieController = {
  getAll: async (req, res) => {
    const movies = await db.Movie.findAll();

    res.json(movies);
  },
  create: async (req, res) => {
    const newMovie = await db.Movie.create({
      title: req.body.title,
      releaseYear: req.body.releaseYear,
      duration: req.body.duration,
    });

    res.json(newMovie);
  },
};

export default movieController;
