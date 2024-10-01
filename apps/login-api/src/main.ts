/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { LoginRequestBody } from 'lib/login-api-types/src';
import express from 'express';
import * as path from 'path';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:3000'],
  })
);

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to login-api!' });
});

app.post<'login', {}, LoginRequestBody>('/api/login', (req, res) => {
  // if the username is 'admin' and the password is 'password' return a 200 status code
  if (req.body.username === 'admin' && req.body.password === 'password') {
    res.status(200).send();
  }
  // otherwise return a 401 status code
  res.status(401).send();
});

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
