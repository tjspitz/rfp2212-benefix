const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const router = require('./routes');

const app = express();
const PORT = 3000;

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use('/', router);
app.use(express.static(path.join(__dirname, '../client/dist')));

app.listen(PORT, () => console.log(`Server Listening at http://localhost:${PORT}`));
