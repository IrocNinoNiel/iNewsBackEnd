const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const controllers = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api',controllers.getHeadlineNews);
app.use('/api',controllers.getSearchNews);
app.use('/api',controllers.getTypeNews);
app.use('/api',controllers.getPhNews);

app.listen(PORT,console.log(`Server at Port ${PORT}`));