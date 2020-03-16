export interface User {
  uid: string;
  username: string;
}

export interface UserProfile {
  userUid: string;
  birthdate: string;
  address?: string;
}

export type SendGiftResult =
  | 'SUCCESS'
  | 'USER_UNREGISTERED'
  | 'USER_TOO_OLD'
  | 'USER_EMPTY'
  | 'WISH_EMPTY'
  | 'BIRTHDAY_INVALID'
  | 'ERROR'
  | 'EMAIL_NOT_SENT';

export interface EmailPoolEntry {
    userName: string;
    wish: string;
    userProfile: UserProfile;
  }