import { Router } from "express";
import movieRouter from "./movie.router.js";

const mainRouter = Router();

mainRouter.use("/movie", movieRouter);

export default mainRouter;
