import fetch from 'node-fetch';
import { UserProfile } from '../common/interface';

export async function getUserProfile(userUid: string): Promise<GetUserProfileResponse> {
  const response = await fetch(API_URL);
  const userProfiles: UserProfile[] = await response && await response.json();

  if (!userProfiles) return { result: 503 };
  const userProfile = userProfiles && userProfiles.find((userProfile) => userProfile.userUid === userUid);
  return userProfile
    ? { userProfile, result: 200 }
    : { result: 204 };
}

interface GetUserProfileResponse {
  result: number;
  userProfile?: UserProfile;
}

const API_URL = 'https://raw.githubusercontent.com/alj-devops/santa-data/master/userProfiles.json';
