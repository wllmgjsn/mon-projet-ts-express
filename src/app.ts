import express from 'express'
import { booksController } from './controllers/books.controller';
import { exporterController } from './controllers/exporter.controller';

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Welcome on the test branch of this project');
});

app.use('/books', booksController);
app.use('/export', exporterController);


export default app;