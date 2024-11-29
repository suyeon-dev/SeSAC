const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

router.get('/', controller.main);
router.post('/login', controller.login);

module.exports = router; //라우터 내보내주기

// (!) 수정 전
// router.post('/login', controller.login);
// router.post('/login', ...)가 아니라 router.post('/', ...)로 작성해야 함
// /login 경로는 이미 app.use('/login', loginRouter)로 설정했으므로, 라우터 파일에서는 /만 사용!!!!!
