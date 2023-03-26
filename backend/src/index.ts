import readline from 'readline';
import './DataBase.js';
import './server.js';
import './mailClient.js';

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
rl.on('line', async (msg) => {
  if (msg === 'restart') process.exit();
  // eslint-disable-next-line no-console
  console.log(
    msg.includes('await') || msg.includes('return')
      ? // eslint-disable-next-line no-eval
        await eval(`(async () => {${msg}})()`)
      : // eslint-disable-next-line no-eval
        eval(msg),
  );
});

// eslint-disable-next-line no-console
console.log('Website Started');
