// server.ts
// where your node app starts

import { Request, Response, Router } from 'express';
import * as bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import { getUserUid } from './api/get-user-uid';
import { getUserProfile } from './api/get-user-profile';

// init
const app = express();
const router = Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('log'));

// Use static files on page load
app.use(express.static('public'));

// Routes
router.get(
  '/getUser/:uid',
  async (req: Request, res: Response): Promise<void> => {
    res.send(await getUserUid(req.params.uid));
  }
);

router.get(
  '/getUserProfile/:uid',
  async (req: Request, res: Response): Promise<void> => {
    res.send(await getUserProfile(req.params.uid));
  }
);

router.get('/', (request, response) => {
  response.sendFile(__dirname + '/views/index.html');
});

app.use('/', router);

// Listen for requests
const port = process.env.PORT || 3000;
const listener = app.listen(port, function () {
  console.log(`Your app is listening on port ${port}`);
});
