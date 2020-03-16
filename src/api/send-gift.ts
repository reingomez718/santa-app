import { getUserUid } from './get-user-uid';
import { getUserProfile } from './get-user-profile';
import { getAge } from './utils/get-age';
import { UserProfile } from '../common/interface';

export async function sendGift(userName: string, wish: string, maxAge: number = 10): Promise<SendGiftResponse> {
  if (!userName) return { result: 'USER_EMPTY' };
  if (!wish) return { result: 'WISH_EMPTY' };

  const userUidResult = await getUserUid(userName);
  if (!userUidResult || userUidResult.result !== 200) return { result: 'USER_UNREGISTERED' };
  
  const userProfileResult = await getUserProfile(userUidResult.uid);
  if (!userProfileResult || userProfileResult.result !== 200) return { result: 'USER_UNREGISTERED' };
  const age = getAge(userProfileResult.userProfile.birthdate);
  if (!age) return { result: 'ERROR' };

  if (age >= maxAge) return { result: 'USER_TOO_OLD' };

  return { result: 'SUCCESS', userProfile: userProfileResult.userProfile };
}

interface SendGiftResponse {
  result: SendGiftResult;
  userProfile?: UserProfile
}

export type SendGiftResult =
  | 'SUCCESS'
  | 'USER_UNREGISTERED'
  | 'USER_TOO_OLD'
  | 'USER_EMPTY'
  | 'WISH_EMPTY'
  | 'ERROR';
  