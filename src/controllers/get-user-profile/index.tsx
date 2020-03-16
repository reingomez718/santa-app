import { Request, Response, Router } from 'express';
import { getUserProfile } from '../../api/get-user-profile';

export const getUserProfileController = async (req: Request, res: Response): Promise<void> => {
  res.send(await getUserProfile(req.params.uid));
}