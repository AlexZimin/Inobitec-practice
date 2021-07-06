import express from 'express';
import router from './routes/node.routes.js';
const PORT = process.env.PORT || 8080;
const startMessage = `Server started on port ${PORT}`;

const app = express();
app.listen(PORT, () => console.log(startMessage));

app.use(express.json());
app.use('/api', router);
