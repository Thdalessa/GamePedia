const { DataTypes,  } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('genre', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      // defaultValue: DataTypes.UUIDV4 // generates automatically an UUIDV4
    },
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
    }
  }, {
    timestamps: false,
  });
};