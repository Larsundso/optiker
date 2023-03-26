import type * as Express from 'express';
import db from '../../DataBase.js';
import type * as DBT from '../../types/DBT.js';

export default async (_req: Express.Request, res: Express.Response) => {
  const result = await db
    .query('SELECT * FROM produkte;')
    .then((r: DBT.rows<'produkte'> | null) => r?.rows ?? []);

  result.forEach((p) => {
    p.id = Number(p.id);
  });

  res.json(result);
};
