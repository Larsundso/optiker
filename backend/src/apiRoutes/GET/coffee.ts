import type * as Express from 'express';

export default async (_req: Express.Request, res: Express.Response) => {
  res.sendStatus(418);
};
