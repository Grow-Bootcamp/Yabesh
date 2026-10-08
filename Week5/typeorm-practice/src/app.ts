import 'reflect-metadata';
import express, { type Express } from 'express';
import { AppDataSource } from './data-source.js';

const app:Express = express();

app.use(express.json());

AppDataSource.initialize()
  .then( ()=> {
    console.log('Database connected');

    app.listen(3000, ()=> {
      console.log(`Server running on http://localhost:3000`);
    });
  })
  .catch( (error) => {
    console.error('Database connection failed: ', error);
  });
