import fs from 'fs';
import type Express from 'express';

const accessBasePath = `../dist/apiRoutes/`;
const importBasePath = '../apiRoutes/';

export default async (req: Express.Request, res: Express.Response) => {
  const reqPath = req.path.startsWith('/api') ? req.path.replace('/api', '') : req.path;

  try {
    fs.accessSync(
      `${accessBasePath}${req.method.toUpperCase()}${reqPath.split(/\?+/)[0]}.js`,
      fs.constants.R_OK | fs.constants.W_OK,
    );
    const imported = (
      await import(`${importBasePath}${req.method.toUpperCase()}${reqPath.split(/\?+/)[0]}.js`)
    ).default;

    imported(req, res);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    res.sendStatus(404);
  }
};
