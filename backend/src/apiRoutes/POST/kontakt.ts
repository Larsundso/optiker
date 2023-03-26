import type * as Express from 'express';
import sendEmail from '../../mailClient.js';

export default async (req: Express.Request, res: Express.Response) => {
  const { message, mail } = req.body;

  if (!message?.length || !mail?.length) {
    res.sendStatus(400);
    return;
  }

  sendEmail({ subject: `Kontaktanfrage - ${mail}`, text: message });

  res.sendStatus(200);
};
