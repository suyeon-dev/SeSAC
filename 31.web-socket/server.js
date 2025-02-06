// npm i ejs express ws

// [1] 웹 서버 및 웹 소켓 서버 생성
const express = require('express'); //웹 서버 프레임워크
const ws = require('ws'); //ws 라이브러리
const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('client');
});

// [2] 서버 실행
const server = app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// console.log(server); // 서버 객체

// [4] 연결될 클라이언트마다 고유한 ID 값 설정 (랜덤 문자열 생성)
function generateUniqueId() {
  const timestamp = Date.now().toString(36); //현재 시간을 36진수로 변환
  // console.log('timestamp', timestamp); //m6ooly28

  // - 좀 더 복잡한 id
  const randomString = Math.random().toString(36).substring(2); //랜덤 문자열 추가
  // console.log('randomString', randomString); //4dlmth06aqv

  return timestamp + randomString;
}

// console.log('id', generateUniqueId()); //m6ooly284dlmth06aqv

// 🔍 substring 함수 알아보기
// console.log('abcdef'.substring(2)); //cdef
// console.log('abcdefgh'.substring(2, 5)); //cde

// ---------- [5] 클라이언트가 웹 소켓 서버에 연결될 때 실행되는 코드 --------
const sockets = []; // 클라이언트 소켓들을 저장하는 배열

// [3] 웹 소켓 서버 생성
// - 기존 Express 서버를 웹 소켓 서버와 연결 -> 웹 소켓을 통한 실시간 통신 가능해짐
const wsServer = new ws.Server({ server: server });
/* 💡 ws 모듈 이벤트 (이벤트 핸들러)
- connection : 클라이언트와 웹 소켓 서버가 연결되었을 때
- message : 클라이언트에게 메시지를 받았을 때
- error : 연결 중 오류
- close: 클라이언트와 연결 종료
*/

// - 클라이언트가 웹 소켓 서버에 연결될 때 실행
wsServer.on('connection', (socket) => {
  console.log(socket); // 연결될 하나의 클라이언트(브라우저)에 대한 정보
  const clientId = generateUniqueId();
  console.log(`클라이언트 id: [${clientId}] 연결됨`);

  sockets.push(socket); // 연결된 새로운 클라이언트 socket을 배열에 추가

  // 메시지 수신 이벤트 (클라이언트 -> 서버)
  socket.on('message', (message) => {
    // 메시지는 버퍼 객체 <Buffer ec b1 84 ed 8c 85 eb b0 a9 20 ec 9e 85 ec 9e a5 7e 21>

    // console.log('=------------');
    // console.log(message); // 버퍼객체
    // console.log(message.toString()); // 문자열 '채팅방 입장~!'
    console.log(`${clientId} 에게 받은 메시지 : ${message}`);
    // [object object] -> 클라이언트 JSON처리 후 {"msg" : "ddd", "name":"ddd"}
    // console.log('=------------');

    // ✅ 현재 연결된 소켓에게만 메시지 전송
    // - socket: 요청하고 있는 클라이언트 1개
    // socket.send('안녕하세요?');

    // ✅ 연결된 모든 클라이언트에게 메시지 전송
    sockets.forEach((client) => {
      // client.send(`${client}`); // 👾 에러 발생한 이유: 문자열[object object]을 객체로 바꿔주라고 했기때문!!!
      client.send(`${message}`); //버퍼 객체 암시적 호출
    });
  });
});
// ---------------------------------------------------------------
