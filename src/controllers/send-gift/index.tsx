import { Request, Response, Router } from 'express';
import { SendGiftResponse, sendGift } from '../../api/send-gift';

export const sendGiftController = async (req: Request, res: Response): Promise<void> => {
  const userName = req.body.userid;
  const wish = req.body.wish;
  const response: SendGiftResponse = await sendGift(userName, wish);
  console.log(response);
  if (response.result !== 'SUCCESS') return;
  res.sendFile(__dirname + '/views/index.html');
}