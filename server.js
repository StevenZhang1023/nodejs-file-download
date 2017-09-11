const fs = require('fs');
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const routerExpress = require('./server/routes');
const downloadFiles = require('./server/routes/api/api.file');
const imageProvider = require('./server/routes/api/api.image');

const host = '127.0.0.1';
const port = 3000;
const app = express();

dotenv.config();
app.use('/', routerExpress);
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/index.html'));
});
app.get('/assets/css/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, '/client', req.url));
});

app.get('/download/:filename', downloadFiles.downloadFiles);
app.get('/img/:filename', imageProvider.imageProvider);

app.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}/`);
});
