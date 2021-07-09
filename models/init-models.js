var DataTypes = require("sequelize").DataTypes;
var _node = require("./node");

function initModels(sequelize) {
  var node = _node(sequelize, DataTypes);

  node.belongsTo(node, { as: "parent", foreignKey: "parent_id"});
  node.hasMany(node, { as: "nodes", foreignKey: "parent_id"});

  return {
    node,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
