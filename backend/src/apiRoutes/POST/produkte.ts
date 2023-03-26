import type * as Express from 'express';
import db from '../../DataBase.js';
import type * as DBT from '../../types/DBT';
import isAuthorized from '../../util/isAuthorized.js';

export default async (req: Express.Request, res: Express.Response) => {
  if (!req.headers.authorization || !(await isAuthorized(req.headers.authorization))) {
    res.sendStatus(401);
    return;
  }

  if (!req.body && !req.body && !Array.isArray(req.body)) {
    res.sendStatus(400);
    return;
  }

  const newProdukte = req.body as DBT.Tables['produkte'][];
  const produkte = await db
    .query(`SELECT * FROM produkte;`)
    .then((r: DBT.rows<'produkte'> | null) => r?.rows ?? []);

  const uniqueProdukte = newProdukte.filter(
    (p) => !produkte.find((p2) => p2.name === p.name && p2.img === p.img),
  );

  uniqueProdukte.forEach((p) => {
    db.query(`INSERT INTO produkte (name, img) VALUES ($1, $2);`, [p.name, p.img]);
  });

  res.sendStatus(200);
};
