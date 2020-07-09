module.exports = function (sequelize, DataTypes) {
  let Component = sequelize.define("Component", {
    central_processor: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [100]
      }
    },
    cpu_cooler: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [100]
      }
    },
    motherboard: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [100]
      }
    },
    ram: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [100]
      }
    },
    storage: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [100]
      }
    },
    graphics_processor: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [100]
      }
    },
    power_supply: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [100]
      }
    },
    case: {
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
    rank: {
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
  });
  return Component;
};
