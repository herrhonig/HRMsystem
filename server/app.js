require('dotenv').config();

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const PORT = 3000;
const app = express();

const candidateRouter = require('./routes/candidateRouter');
const clientsRouter = require('./routes/clientsRouter');
const vacanciesRouter = require('./routes/vacanciesRouter')

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(morgan('dev'));

app.use('/candidates', candidateRouter);
app.use('/vacancies', vacanciesRouter);
app.use('/clients', clientsRouter);

app.get('/', (req, res) => {
  res.send('hi');
});

app.listen(PORT, () => {
  console.log('Server has been started on PORT ' + PORT);
});
