import {Sequelize} from 'sequelize';
import sequelize from '../db_config.js';

const node = sequelize.define('node', {
  id: {
    autoIncrement: true,
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING(256),
    allowNull: true
  },
  ip: {
    type: Sequelize.STRING(45),
    allowNull: false
  },
  port: {
    type: Sequelize.INTEGER,
    allowNull: true
  },
  parent_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
    references: {
      model: 'node',
      key: 'id'
    }
  }
}, {
  sequelize,
  tableName: 'node',
  schema: 'public',
  timestamps: false,
  indexes: [
    {
      name: "node_pkey",
      unique: true,
      fields: [
        { name: "id" },
      ]
    },
  ]
});

export default node