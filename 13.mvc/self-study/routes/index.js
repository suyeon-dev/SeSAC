const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

// 라우터1
router.get('/', controller.main);

// 라우터2
router.get('/comments', controller.comments);

// 라우터3
router.get('/comment/:id', controller.comment);

module.exports = router; // 라우터 내보내주기
