// server.ts
// where your node app starts

import { Router } from 'express';
import * as bodyParser from 'body-parser';
import express from 'express';
import morgan from 'morgan';
import { sendGiftController } from './controllers/send-gift';
import { getUserProfileController } from './controllers/get-user-profile';
import { getUserController } from './controllers/get-user';
import { pageController } from './controllers/page';

// init
const app = express();
const router = Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('log'));

// Use static files on page load
app.use(express.static('public'));

// Routes
router.get('/getUser/:uid', getUserController);
router.get('/getUserProfile/:uid', getUserProfileController);
router.post('/sendGift', sendGiftController );
router.get('/', pageController);

app.use('/', router);

// Listen for requests
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Your app is listening on port ${port}`);
});
