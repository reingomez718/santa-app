import { Request, Response, Router } from 'express';
import { getUserUid } from '../../api/get-user-uid';

export const getUserController = async (req: Request, res: Response): Promise<void> => {
  res.send(await getUserUid(req.params.uid));
}