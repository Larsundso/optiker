/* eslint-disable no-console */
import nodemailer from 'nodemailer';
import auth from './auth.json' assert { type: 'json' };

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: auth.mail,
    pass: auth.mailPW,
  },
});

export default (mailOptions: { subject: string; text: string; from?: string; to?: string }) => {
  mailOptions.from = auth.mail;
  mailOptions.to = auth.mail;

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log(`Email sent: ${info.response}`);
    }
  });
};
