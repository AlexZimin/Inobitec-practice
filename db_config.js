import { Sequelize } from "sequelize";

const sequelize = new Sequelize('node_postgres', 'postgres', 'root', {
    port: '5432',
    logging: false,
    dialect: 'postgres',
    host: 'localhost',
    define: {
        timestamps: false
    }
});

export default sequelize