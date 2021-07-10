import express from 'express';
import router from './routes/node.routes.js';
import sequelize from "./db_config.js";
import cors from 'cors';

const PORT = process.env.PORT || 8080;
const startMessage = `Server started on port ${PORT}`;

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
}

const app = express();
app.listen(PORT, () => console.log(startMessage));

app.use(express.json());
app.use(cors());
app.use('/api', router);
