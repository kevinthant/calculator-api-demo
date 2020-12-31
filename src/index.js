import add from './add';

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(`Calculator API`)
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})