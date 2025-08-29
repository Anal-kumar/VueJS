const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.get('/status', (req, res) => {
  res.json({ status: 'OK' });
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});