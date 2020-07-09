module.exports = function (sequelize, DataTypes) {
    let Builds = sequelize.define("Builds", {
        part_id: {
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