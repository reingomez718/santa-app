import fetch from 'node-fetch';

export async function getUserUid(userName: string): Promise<GetUserUidResponse> {
  const response = await fetch(API_URL);
  const users: User[] = await response && await response.json();
  if (!users) return { result: 503 };
  const user = users.find((user) => user.username === userName);
  return user ? { uid: user.uid, result: 200 } : { result: 204 };
}

interface User {
  uid: string;
  username: string;
}

interface GetUserUidResponse {
  result: number;
  uid?: string;
}

const API_URL = 'https://raw.githubusercontent.com/alj-devops/santa-data/master/users.json';