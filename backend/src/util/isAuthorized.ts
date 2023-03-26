import db from '../DataBase.js';
import type * as DBT from '../types/DBT';

export default async (token: string) => {
  const dbUser = await db
    .query(`SELECT * FROM admins WHERE token = $1;`, [token.replace('Bearer ', '')])
    .then((r: DBT.rows<'admins'> | null) => r?.rows[0] ?? null);

  return !!dbUser;
};
