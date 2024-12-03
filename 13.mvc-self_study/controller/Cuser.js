// model에 접근해서 데이터를 가져오는 controller
const User = require('../model/User');

// GET /
exports.main = (req, res) => {
  res.render('index');
};

// POST /login
exports.login = (req, res) => {
  // res.send('응답!'); //서버가 클라이언트에 응답을 보냄
  console.log('클라이언트로부터 받은 요청데이터', req.body); //{userId: '', userPw: ''} -> Node.js 서버 터미널
  console.log('model:', User.getUserInfo()); //{ realId: 'bebe', realPw: '1004' }

  //User model에서 유저 정보 가져오기
  const { realId, realPw } = User.getUserInfo();
  console.log('Model.User', realId, realPw);

  //클라에서 받은 요청 데이터
  const { userId, userPw } = req.body;
  console.log('입력값:', userId, userPw);

  //입력값과 User.js 값 비교
  if (realId === userId && realPw === userPw) {
    //서버가 클라에게 응답보냄 -> 클라는 응답 사용해서 성공 메시지 표시 Or 추가 작업 진행
    return res.send({ userInfo: req.body, isSuccess: true });
  } else {
    res.send({ isSuccess: false });
  }
};

// POST /login2
exports.login2 = (req, res) => {
  // res.send('응답!');
  console.log('Model.user:', User.user); //서버 터미널 확인
  /*
    Model.user: apple//1234//사과사과
    banana//4321//바나나나나
    cocoa//qwer1234//미떼 
  */

  //배열 안에 객체가 있는 형태로 바꿔주기
  const users = [];
  const userIds = [];
  const userData = User.user.split('\n');
  console.log('userData', userData);

  userData.forEach((user) => {
    const userInfoArray = user.split('//'); // [banana//4321//바나나나나]
    const userObj = {
      realId: userInfoArray[0],
      realPw: userInfoArray[1],
      name: userInfoArray[2],
    };

    users.push(userObj);
    userIds.push(userInfoArray[0]);
  });
  console.log('users', users);
  console.log('userIds', userIds);

  //요청 정보를 바탕으로 회원이 맞는 지 확인
  console.log('req.body', req.body); //클라이언트 Input 입력값

  const idx = userIds.indexOf(req.body.userId);
  const { userId, userPw } = req.body;
  if (idx >= 0) {
    if (userPw === users[idx].realPw) {
      console.log('비밀번호 일치');
      res.send({ isSuccess: true, userName: users[idx].name });
    } else {
      console.log('비밀번호 불일치');
      res.send({ isSuccess: false });
    }
  } else {
    console.log('아이디가 없는 회원');
    res.send({ isSuccess: false });
  }
};
