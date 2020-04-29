const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const visitController = require('./controllers/visitController');
const visitorController = require('./controllers/visitorController');

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send({ message: 'hello world!' });
});

app.use(visitController);
app.use(visitorController);

app.listen(process.env.PORT || 3000, () => {
  const port = process.env.PORT || 3000;
  console.log(`Server is listening on port ${port}.`);
});