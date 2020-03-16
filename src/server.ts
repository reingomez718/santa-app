// server.ts
// where your node app starts

import { Request, Response, Router } from 'express';
import * as bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import { getUserUid } from './api/get-user-uid';
import { getUserProfile } from './api/get-user-profile';
import { sendGift, SendGiftResponse } from './api/send-gift';

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

router.post(
  '/sendGift',
  async (req: Request, res: Response): Promise<void> => {
    const userName = req.body.userid;
    const wish = req.body.wish;
    const response: SendGiftResponse = await sendGift(userName, wish);
    console.log(response);
    if (response.result !== 'SUCCESS') return;
  }
);

router.get(
  '/',
  (req: Request, res: Response) => { 
    res.sendFile(__dirname + '/views/index.html');
  }
);

app.use('/', router);

// Listen for requests
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
