import express from "express";
import mainRouter from "./routes/index.js";
import morgan from "morgan";

import database from "./database/index.js";

database.sequelize.sync();

const app = express();

app.use(express.json());

app.use(morgan("tiny"));

app.use("/api", mainRouter);

app.listen(8000, () => {
  console.log("Le serveur a démarrer : http://localhost:8000 🎉");
});
