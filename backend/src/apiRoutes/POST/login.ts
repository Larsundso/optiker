import type * as Express from 'express';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';
import db from '../../DataBase.js';
import type * as DBT from '../../types/DBT';

export default async (req: Express.Request, res: Express.Response) => {
  const { password: hashedPassword, email } = (
    req.body ? JSON.parse(Object.keys(req.body)[0]) : {}
  ) as {
    password?: string;
    email?: string;
  };

  if (!hashedPassword || !email) {
    res.sendStatus(400);
    return;
  }

  const dbUser = await db
    .query(`SELECT * FROM admins WHERE email = $1;`, [email])
    .then((r: DBT.rows<'admins'> | null) => r?.rows[0] ?? null);

  if (!dbUser) {
    res.sendStatus(401);
    return;
  }

  const isPasswordValid = bcrypt.compareSync(dbUser.password, hashedPassword);
  if (!isPasswordValid) {
    res.sendStatus(401);
    return;
  }

  const token = bcrypt.hashSync(dbUser.email, crypto.randomInt(5, 15));
  await db.query(`UPDATE admins SET token = $1 WHERE email = $2;`, [token, email]);

  res.json({ token });
};
