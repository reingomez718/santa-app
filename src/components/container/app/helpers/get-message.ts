import { SendGiftResult } from '../../../../common/interface';

export function getMessage(code: SendGiftResult, name?: string, address?: string) {
  switch(code) {
    case 'SUCCESS':
      return `Successfully registered ${name || 'some dude'} and the gifts will be delivered at ${address || 'some place'}`;
    case 'BIRTHDAY_INVALID':
      return 'The user has an invalid birthday data';
    case 'USER_EMPTY':
      return 'The user does not exist';
    case 'USER_TOO_OLD':
      return 'The user is too old to receive gifts';
    case 'USER_EMPTY':
      return 'Please input a user id';
    case 'WISH_EMPTY':
      return 'Please input a wish';
    default:
      return `An error has occured ${code}`;
  }
}