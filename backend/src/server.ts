import Express from 'express';
import http from 'http';
import BodyParser from 'body-parser';
import cors from 'cors';
import SlowDown from 'express-slow-down';

export const app = Express();
export const server = http.createServer(app);
const apiRouter = Express.Router();
const JSONParser = BodyParser.json();
const URLEncodedParser = BodyParser.urlencoded({ extended: false });

const frontendPath = '../../frontend/dist/';
const speedLimiter = SlowDown({
  windowMs: 5 * 1000,
  delayAfter: 10,
  delayMs: 1000,
});

server.listen(80);
app.enable('trust proxy');
app.use(Express.static(frontendPath));
app.use(speedLimiter);
app.use(URLEncodedParser);
app.use(cors());
app.use(
  BodyParser.json({
    limit: '25mb',
    verify: (req, _, buf, encoding) => {
      if (buf && buf.length) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        req.rawBody = buf.toString(encoding || 'utf8');
      }
    },
  }),
);

const handleRequest = async (
  req: Express.Request,
  res: Express.Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _: Express.NextFunction,
) => {
  if (!req.headers || !req.headers.host) {
    return;
  }

  (await import('./routers/api.js')).default(req, res);
};

apiRouter.use(speedLimiter);
apiRouter.use(URLEncodedParser);
apiRouter.use(cors());
apiRouter.use(
  BodyParser.json({
    limit: '25mb',
    verify: (req, _, buf, encoding) => {
      if (buf && buf.length) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        req.rawBody = buf.toString(encoding || 'utf8');
      }
    },
  }),
);

apiRouter.use('/api', Express.json());
app.get('/api/*', JSONParser, (...args) => handleRequest(...args));
app.post('/api/*', JSONParser, (...args) => handleRequest(...args));
app.delete('/api/*', JSONParser, (...args) => handleRequest(...args));
app.get('/api/*', JSONParser, (...args) => handleRequest(...args));
