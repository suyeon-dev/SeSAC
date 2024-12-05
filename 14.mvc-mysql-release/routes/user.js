// TODO: 라우트 설정
const express = require('express');
const controller = require('../controller/Cuser');
const router = express.Router();

// GET /user : 홈페이지
router.get('/', controller.main);

// GET /user/signup : 회원가입 페이지 요청
router.get('/signup', controller.getSignup);

// GET /user/signin : 로그인 페이지 요청
router.get('/signin', controller.getSignin);

// ------ POST

// POST /user/signup : 새로운 회원 생성
router.post('/signup', controller.postSignup);

// POST /user/siginin : 로그인 회원 조회

// POST /user/profile : 로그인 성공 시 회원정보 수정 페이지 접속

// PATCH /user/profile/eidt : 회원정보 수정

// DELETE /user/profile/delete : 회원 삭제

module.exports = router;
