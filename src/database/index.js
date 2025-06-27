import { Sequelize } from "sequelize";
import movieBuilder from "./models/movie.model.js";

const sequelize = new Sequelize(
  "testingexpress",
  "SA",
  "Some4Complex#Password",
  {
    host: "127.0.0.1",
    dialect: "mssql",
    port: 1433, // Port par défaut de SQL Server
    dialectOptions: {
      options: {
        trustServerCertificate: true,
      },
    },
    logging: true, // désactive les logs SQL dans la console
  }
);

await sequelize.authenticate();
console.log("Connection has been established successfully.");

const db = {};

db.sequelize = sequelize;

// ajouter les models
db.Movie = movieBuilder(sequelize);

// ajouter les relations

export default db;
