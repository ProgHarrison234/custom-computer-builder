module.exports = function (sequelize, DataTypes) {
    let Builds = sequelize.define("Builds", {
        CPU_part_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        CPU_cooler_part_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Motherboard_part_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        RAM_part_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Storage_part_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        GPU_part_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        PSU_part_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        Case_part_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return Builds;
};