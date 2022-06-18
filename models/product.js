const { Model, DataTypes } = require("sequelize");
const sequelize = require("./config");
 
class Product extends Model {}
 
Product.init(
  {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product_price:{
        type: DataTypes.DOUBLE,
    },
    product_description:{
        type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    modelName: "products",
    timestamps: false
  }
);
 
module.exports = Product;