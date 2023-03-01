const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./routes');

const app = express();
const PORT = 3000;

app.use(morgan('dev'));
app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use('/', router);
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => console.log(`Server Listening at http://localhost:${PORT}`));
