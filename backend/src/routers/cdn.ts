import fs from 'fs';
import type Express from 'express';

export default async (req: Express.Request, res: Express.Response) => {
  const reqURL = req.url.replace('cdn', '');
  const path = `S:/Bots/optiker/CDN/${reqURL}`.replace(/\/+/g, '/');

  if (reqURL.length === 0) {
    res.sendStatus(404);
    return;
  }

  try {
    fs.accessSync(path, fs.constants.R_OK | fs.constants.W_OK);
    res.sendFile(path);
  } catch {
    res.sendStatus(404);
  }
};
