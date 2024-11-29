// 1. model에 접근해서 데이터를 가져오는 controller
const User = require('../model/User');

// GET /
exports.main = (req, res) => {
  res.render('index');
};

// POST /login
exports.login = (req, res) => {
  console.log('req.body', req.body);

  //User model에서 유저 정보 가져오기
  const userInfo = User.userInfo();
  // 수정전 : const userInfo = User.userinfo;

  // 입력값과 User.js 값 비교
  if (userInfo.id === req.body.userId && userInfo.pw === req.body.userPw) {
    res.send({ isSuccess: true, userId: req.body.userId });
  } else {
    res.send({ isSuccess: false });
  }
};
