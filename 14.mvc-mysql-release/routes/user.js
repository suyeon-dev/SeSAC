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

// 1. POST /user/signup : 새로운 회원 생성
router.post('/signup', controller.postSignup);

// 2-1. POST /user/siginin : 로그인 가능한 계정인지 조회
router.post('/signin', controller.postSignin);

// 2-2. POST /user/profile : 로그인 성공 시 회원정보 수정 페이지 접속
// router.post('/signin', controller.postProfile);

// 3. PATCH /user/profile/eidt : 회원정보 수정

// 4. POST /user/profile/delete : 회원 삭제 (탈퇴 요청)
// - DELETE도 사용 가능. body 정보로 넘어오기 때문에 POST도 가능

module.exports = router;
