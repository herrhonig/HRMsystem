require('dotenv').config();

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT ?? 4000;
const app = express();

const router = require('./routes/indexRouter');
const candidateRouter = require('./routes/candidateRouter');
const errorMiddleware = require('./middleware/error-middleware');

app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use(morgan('dev'));

app.use(cors({
  credentials: true,
  origin: 'http://localhost:3000',
}));

app.use('/api', router);
app.use('/candidate', candidateRouter);

app.get('/', (req, res) => {
  res.send('hi');
});

// error middleware всегда последний:
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log('Server has been started on PORT ' + PORT);
});
