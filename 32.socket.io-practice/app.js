// 필요한 모듈 가져오기
const express = require('express'); //express웹 프레임워크
const http = require('http'); // node.js 기본 http모듈
const app = express(); //express 앱 생성
const server = http.createServer(app); //HTTP 서버 생성 (Express앱 기반)
const io = require('socket.io')(server); //socket.io 서버 생성(HTTP서버와 연결)

const PORT = 8080;

/* middleware */
app.set('view engine', 'ejs');

/* api 라우팅 */
app.get('/', (req, res) => {
  res.render('talk');
});

/* socket 이벤트 핸들러 */
io.on('connection', (socket) => {
  console.log('connected! >>', socket.id, socket.rooms);

  // [1] 나 제외 모든 클라이언트에게 입장공지문 발송
  socket.broadcast.emit('notice', `${socket.id}님이 입장하셨습니다`);

  // [3-2] 메시지를 하나의 클라이언트에게서 받아서 전체 클라이언트에게 전달
  socket.on('send', (msg) => {
    console.log(`${socket.id}:${msg}`);
    // socket.id는 내 아이디/ 남의 아이디일 수 있음
    io.emit('message', { id: socket.id, message: msg });
  });
});

// 서버 실행
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
