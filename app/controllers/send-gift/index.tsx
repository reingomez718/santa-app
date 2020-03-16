import { Request, Response } from 'express';
import { SendGiftResponse, sendGift } from '../../api/send-gift';

export const sendGiftController = async (req: Request, res: Response): Promise<void> => {
  const userName = req.body.userName;
  const wish = req.body.wish;
  const response: SendGiftResponse = await sendGift(userName, wish);
  
  res.send(response);
}