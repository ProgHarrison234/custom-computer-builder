module.exports = function (sequelize, DataTypes) {
  let Component = sequelize.define("Component", {
    component: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [100]
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [100]
      }
    },
    manufacturer: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [100]
      }
    },
    socket: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [100]
      }
    },
    gaming_pc: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        len: [100]
      }
    },
    home_theater_pc: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        len: [100]
      }
    },
    workstation_pc: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      validate: {
        len: [100]
      }
    },
    ranking: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        len: [2]
      }
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    part_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    sequelize,
  
    // don't forget to enable timestamps!
    timestamps: true,
  
    // I don't want createdAt
    createdAt: false,
  
    // I want updatedAt to actually be called updateTimestamp
    updatedAt: false
  });
  return Component;
};
