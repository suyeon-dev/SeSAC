const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

router.get('/', controller.main);
router.post('/login', controller.login);

module.exports = router; //라우터 내보내주기
