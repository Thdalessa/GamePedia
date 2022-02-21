const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4 // generates automatically an UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT, //stores both single-byte and multibyte characters
      allowNull: false
    },
    released: {
      type: DataTypes.DATEONLY, 
    },
    rating: {
      type: DataTypes.INTEGER, // So, 3 should be the max length of the rating number
    },
    platforms: {
      type: DataTypes.ARRAY(DataTypes.STRING), 
      // allowNull: false
    },
    // genre: {
    //   type: DataTypes.ARRAY(DataTypes.STRING), 
    //   // allowNull: false
    // },
    image: {
      type: DataTypes.TEXT //Here i decide to put TEXT instead of STRING since the URL might be fairly large
    },
  }, {
    timestamps: false,
  });
};
