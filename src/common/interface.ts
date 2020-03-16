export interface User {
  uid: string;
  username: string;
}

export interface UserProfile {
  userUid: string;
  birthdate: string;
  address?: string;
}