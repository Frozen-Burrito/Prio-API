const express = require('express');
const morgan = require('morgan');

const apiRoutes = require('./routes/api_routes');

const connectToMongo = require('./helpers/connectToMongo');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: './.env' });
}

const app = express();

connectToMongo(process.env.MONGO_URI);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(morgan('dev'));

app.use('/api/v1', apiRoutes);

app.get('*', (req, res) => {
  res.send('This is an API');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`API listening on port ${PORT}`));