import { getUserUid } from './get-user-uid';
import { getUserProfile } from './get-user-profile';
import { getAge } from '../utils/get-age';
import { UserProfile, SendGiftResult } from '../common/interface';
import { scheduleEmail } from '../utils/schedule-email';

export async function sendGift(userName: string, wish: string, maxAge: number = 10): Promise<SendGiftResponse> {
  // User existence check
  if (!userName) return { result: 'USER_EMPTY' };
  if (!wish) return { result: 'WISH_EMPTY' };
  const userUidResult = await getUserUid(userName);
  if (!userUidResult || userUidResult.result !== 200) return { result: 'USER_UNREGISTERED' };
  const userProfileResult = await getUserProfile(userUidResult.uid);
  if (!userProfileResult || userProfileResult.result !== 200) return { result: 'USER_UNREGISTERED' };

  // Age check
  const age = getAge(userProfileResult.userProfile.birthdate);
  if (isNaN(age)) return { result: 'BIRTHDAY_INVALID' };
  if (!age) return { result: 'ERROR' };
  if (age >= maxAge) return { result: 'USER_TOO_OLD' };

  // Email
  const mailResult = scheduleEmail(userName, wish, userProfileResult.userProfile);
  if (!mailResult) return { result: 'EMAIL_NOT_SENT', userProfile: userProfileResult.userProfile };

  return { result: 'SUCCESS', userProfile: userProfileResult.userProfile };
}

export interface SendGiftResponse {
  result: SendGiftResult;
  userProfile?: UserProfile
}
