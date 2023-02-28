const express = require('express');
const ctrl = require('./controllers');

const router = express.Router();

router.get('/plans', ctrl.get);
router.post('/plans', ctrl.post);
router.put('/plans', ctrl.put);

module.exports = router;
