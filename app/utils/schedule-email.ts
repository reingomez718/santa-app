import { LocalStorage } from 'node-localstorage';
import { UserProfile, EmailPoolEntry } from '../common/interface';
import { LocalEmailScheduleFile } from '../common/mail';

export function scheduleEmail(userName: string, wish: string, userProfile: UserProfile) {
  const localStorage = new LocalStorage(LocalEmailScheduleFile);
  const emailPool: EmailPoolEntry[] = JSON.parse(localStorage.getItem('email-pool') || '[]');
  emailPool.push({
    userName,
    wish,
    userProfile
  });
  localStorage.setItem('email-pool', JSON.stringify(emailPool));
  return true;
}

