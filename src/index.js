import add from './add';

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`Calculator API - it is also running now in TEST environment`);
});

app.get('/sum', (req, res) => {
  const { a = 0, b = 0 } = req.query;
  const sum = add(parseInt(a), parseInt(b));
  res.json({ sum });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})