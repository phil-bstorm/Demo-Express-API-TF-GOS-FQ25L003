import { DataTypes, Sequelize } from "sequelize";

export default (sequelize) => {
  const Movie = sequelize.define("Movie", {
    // Attributes
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    releaseYear: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  return Movie;
};
