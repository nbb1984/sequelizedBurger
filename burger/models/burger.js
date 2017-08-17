module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("burger", {
    // Giving the Author model a name of type STRING
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
    // timestamps: true,
    // createdAt: {
    //   field: 'beginTime',
    //   defaultValue: sequelize.literal('NOW()'),
    });
  });


  return Burger;
};