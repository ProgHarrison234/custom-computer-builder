module.exports = function(sequelize, DataTypes) {
    let Product = sequelize.define("Product", {
      component: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [60]
        }
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [100]
        }
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [255]
        }
      },
      price: {
        type: DataTypes.INT,
        allowNull: false,
      },
      rating: {
        type: DataTypes.STRING,
        defaultValue: "Good"
      }
    });
    return Product;
  };
  