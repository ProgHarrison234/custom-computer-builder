module.exports = function (sequelize, DataTypes) {
    let Builds = sequelize.define("Builds", {
        CPU_part_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_1: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });
    return Builds;
};