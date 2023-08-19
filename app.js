const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res, next) => {
  res.sendFile(__dirname + '/index.html')
});

app.get('/about', (req, res, next) => {
  res.sendFile(__dirname + '/about.html');
});

app.get('/contact-me', (req, res, next) => {
  res.sendFile(__dirname + '/contact-me.html');
});

app.use((req, res, next) => {
  res.sendFile(__dirname + '/404.html');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log('Server running');
});