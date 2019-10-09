const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const axios = require('axios');

const port = process.env.PORT || 3000;

app.use(express.static('./public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  next();
});

async function callApiUrl(url, res) {
  try {
    const { data } = await axios.get(url, {
      headers: { Authorization: 'Client-ID 1e91e6f72f69f8a' }
    });
    res.status(200).send(data);
  } catch (error) {
    console.log(error);
  }
}

app.get('/:id', (req, res) => {
  const fullUrl = `https://api.imgur.com/3/gallery/album/${req.params.id}`;
  callApiUrl(fullUrl, res);
});

app.get('*', (req, res) => {
  const fullUrl = `https://api.imgur.com/3/gallery${req.url}`;
  callApiUrl(fullUrl, res);
});

app.listen(port, () => console.log(`Server is running on ${port}`));
