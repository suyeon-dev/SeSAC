const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

router.get('/', controller.main);
router.post('/login', controller.login);
router.post('/login2', controller.login2);

module.exports = router;
