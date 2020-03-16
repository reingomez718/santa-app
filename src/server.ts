// server.ts
// where your node app starts

import { Request, Response, Router } from 'express';
import * as bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';

// init project
const app = express();

app.use(bodyParser());
app.use(morgan());

// we've started you off with Express,
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/index.html');
});

// listen for requests :)
const port = process.env.PORT || 3000;
const listener = app.listen(port, function () {
  console.log(`Your app is listening on port ${port}');
});
