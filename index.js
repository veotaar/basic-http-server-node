const http = require('http');
const fs = require('fs/promises');

const PORT = 3000;

const server = http.createServer();

server.on('request', (req, res) => {
  switch (req.url) {
    case '/':
      fs.readFile(__dirname + '/index.html')
        .then(data => {
          res.setHeader('Content-Type', 'text/html');
          res.statusCode = 200;
          res.end(data);
        })
        .catch(err => {
          res.statusCode = 500;
          res.end(err);
          return;
        });
        break;
    case '/about':
      fs.readFile(__dirname + '/about.html')
        .then((data) => {
          res.setHeader('Content-Type', 'text/html');
          res.statusCode = 200;
          res.end(data);
        })
        .catch((err) => {
          res.statusCode = 500;
          res.end(err);
          return;
        });
        break;
    case '/contact-me':
      fs.readFile(__dirname + '/contact-me.html')
        .then((data) => {
          res.setHeader('Content-Type', 'text/html');
          res.statusCode = 200;
          res.end(data);
        })
        .catch((err) => {
          res.statusCode = 500;
          res.end(err);
          return;
        });
        break;
    default:
      fs.readFile(__dirname + '/404.html')
        .then((data) => {
          res.setHeader('Content-Type', 'text/html');
          res.statusCode = 404;
          res.end(data);
        })
        .catch((err) => {
          res.statusCode = 500;
          res.end(err);
          return;
        });
        break;
  }
});

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});