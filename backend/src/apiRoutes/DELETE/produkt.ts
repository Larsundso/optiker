import type * as Express from 'express';
import db from '../../DataBase.js';
import isAuthorized from '../../util/isAuthorized.js';

export default async (req: Express.Request, res: Express.Response) => {
  if (!req.headers.authorization || !(await isAuthorized(req.headers.authorization))) {
    res.sendStatus(401);
    return;
  }

  if (!req.body && !req.body.id && typeof req.body.id !== 'number') {
    res.sendStatus(400);
    return;
  }

  const deleteID = (req.body as { id: number }).id;
  db.query(`DELETE FROM produkte WHERE id = $1;`, [deleteID]);

  res.sendStatus(200);
};
