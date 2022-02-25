require('dotenv').config();

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const PORT = 3000;
const app = express();

const candidateRouter = require('./routes/candidateRouter');

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(morgan('dev'));

app.use('/candidate', candidateRouter);

app.get('/', (req, res) => {
  res.send('hi');
});

app.listen(PORT, () => {
  console.log('Server has been started on PORT ' + PORT);
});
