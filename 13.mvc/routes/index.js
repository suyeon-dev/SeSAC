const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

router.get('/', controller.main);

router.get('/comments', controller.comments);

// get 요청: req.query 또는 req.params로 받을 수 있음
router.get('/comment/:id', controller.comment);

module.exports = router; //라우터 내보내주기
