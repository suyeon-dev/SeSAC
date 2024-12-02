const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

router.get('/', controller.main); //controller는 객체 형태로 불러와짐
router.post('/login', controller.login);
router.post('/login2', controller.login2);

module.exports = router; //라우터 내보내주기
