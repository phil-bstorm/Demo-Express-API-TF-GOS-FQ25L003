import { Router } from "express";
import movieController from "../controllers/movie.controller.js";

const movieRouter = Router();

movieRouter.route("/").get(movieController.getAll);
movieRouter.route("/").post(movieController.create);

export default movieRouter;
