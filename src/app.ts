import express from 'express'
import { booksController } from './controllers/books.controller';

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello TypeScript + Express!');
});

app.use('/books', booksController);


export default app;