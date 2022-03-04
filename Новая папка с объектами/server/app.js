require('dotenv').config();

const path = require('path');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const PORT = process.env.PORT ?? 4000;
const app = express();
const corsOptions = {
  origin: process.env.CLIENT_URL,
  methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
  credentials: true, // access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

const router = require('./routes/indexRouter');
const candidateRouter = require('./routes/candidateRouter');
const clientsRouter = require('./routes/clientsRouter');
const vacanciesRouter = require('./routes/vacanciesRouter');
const errorMiddleware = require('./middleware/error-middleware');

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));

app.use('/api', router);
app.use('/candidates', candidateRouter);
app.use('/vacancies', vacanciesRouter);
app.use('/clients', clientsRouter);
app.use('/candidate', candidateRouter);
// error middleware всегда последний:
app.use(errorMiddleware);

app.listen(PORT, () => {
  console.log(`Server has been started on PORT ${PORT}`);
});
