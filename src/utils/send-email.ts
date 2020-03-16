import nodemailer, { SendMailOptions } from 'nodemailer';
import { UserProfile } from '../common/interface';
import { DefaultSenderMail, MailerInfo, DefaultSantaMail } from '../common/mail';

export function sendEmail(userName: string, wish: string, userProfile: UserProfile, senderMail?: string, santaMail?: string) {
  const transporter = nodemailer.createTransport(MailerInfo);
  const message: SendMailOptions = {
    from: senderMail || DefaultSenderMail,
    to: santaMail || DefaultSantaMail,
    subject: `[Gift Request] ${userName} wants a few things for being a good felow this year`,
    text: `Hey Santa,\n\n${userName} wants these stuff: \n${wish} \n\n\n Deliver it here at this house: \n${userProfile.address}`,
  }
  transporter.sendMail(message, function(err, info) {
    if (err) {
      console.log('NO')
      return false;
    }
  });

  return true;
}