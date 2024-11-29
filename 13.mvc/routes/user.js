const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

// (app.js에서) GET /user
// - 콜백이라서 함수 호출하면 안됨 getUser() No!!!!
router.get('/', controller.getUser);

// GET /user/aa
// router.get('/aa', controller.a);

// POST /user/login
// router.post('/login', controller.login);

module.exports = router; //라우터 내보내주기

// 라우터 분리되면 컨트롤러도 분리해주는게 좋음 -> Cuser.js 만들자
