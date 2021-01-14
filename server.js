const express = require('express');

const apiRoutes = require('./routes/api_routes');

const connectToMongo = require('./helpers/connectToMongo');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: './.env' });
}

const app = express();

connectToMongo(process.env.MONGO_URI);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api/v1', apiRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`API listening on port ${PORT}`));