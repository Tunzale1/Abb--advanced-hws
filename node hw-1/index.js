import http from 'http';
import url from 'url';
import fs from 'fs';

let requestCount = 0;

const app = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    requestCount += 1;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      message: 'Request handled successfully',
      requestCount,
    }));
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found!');
  }
});

const port = process.argv.find(arg => arg.startsWith('--port='));
const myPort = port ? parseInt(port.split('=')[1], 10) : 3000;

app.listen(myPort, () => {
  console.log(`Hello Node.js!! Server is running on port ${myPort}`);
});