const express = require('express');
const app = express();
const PORT = 8080;

// socket.io의 소켓이 http모듈로 생성된 서버에만 동작
const http = require('http'); //node.js 기본 모듈
// 이전에는 Http 예외 처리 너무 많아서 express로 썼음

const server = http.createServer(app);
const io = require('socket.io')(server);

// 미들웨어 설정
app.set('view engine', 'ejs');

// ----------------- API -----------------
// 렌더링
app.get('/', (req, res) => {
  res.render('client');
});

app.get('/practice1', (req, res) => {
  res.render('client2');
});

app.get('/chat-room', (req, res) => {
  res.render('rooms');
});

// ✅ socket 코드 작성
// - 기본 메서드 connection은 Emit없어도 됨
// - io : 전체, socket : 하나
io.on('connection', (socket) => {
  //   console.log(socket);
  console.log('socket.id', socket.id);

  /* --------- 🧐 on과 emit 사용해보기 ------- */
  // 1. client > server > client
  //   클라이언트 이벤트 받아주기
  socket.on('event_name', (arg1, arg2, arg3, cb) => {
    console.log('[event_name]::', arg1, arg2, arg3);
    // cb : Emit으로 다시 보내줄 수 있음
    cb(arg1, arg2, arg3);
  });

  // 2. client > server
  socket.on('cb_test', (arg, cb) => {
    console.log('[cb_test]::', arg); // 안녕하세요
    console.log(cb); //undefined (클라이언트 emit에서 받아주는 콜백이 없기 때문)
  });

  // 3-1. server > client, 클라이언트 전체에게
  io.emit('entire_client', '전체에게 보냅니다!');

  // 3-2. server > client, 클라이언트 하나에게
  socket.emit('one_client', '하나의 클라이언트에게 보냅니다!');

  // ------------ 💬 채팅 만들기 ------------
  // [ver1] 나의 메시지가 나에게만 보임
  socket.on('new_message1', (arg, cb) => {
    // Stringify, parse 신경 안 써도 됨!
    console.log('[new_message1]::', arg);
    cb(arg); //나에게만 데이터를 전달
  });

  // [ver2] 나의 메시지가 모두에게 보이도록
  socket.on('new_message2', (arg) => {
    console.log('[new_message2]::', arg);
    // cb(arg);

    // 전체에게 보내주기
    io.emit('message_render', arg);
  });

  // ------------ 💬 실습 1 : socket 연습 ------------
  socket.on('hello', (msg, cb) => {
    console.log('client:', msg);
    cb('안뇽');
  });

  socket.on('study', (msg) => {
    console.log('client:', msg);
    socket.emit('study2', '공부하자');
  });

  socket.on('bye', (msg) => {
    console.log('client:', msg);
    socket.emit('bye2', '잘 가');
  });

  // ------------ 💬 방이 있는 채팅 ------------
  // console.log('socket.rooms', socket.rooms);
  // 방이 없을 때, {socket.id} 정보만 들어와있음
  console.log(socket.room); //undefined

  socket.on('join', (roomname) => {
    // 2. 서버에서 방열기
    // Join() : 같은 방에 들어있는 사람들끼리 통신할 수 있도록
    socket.join(roomname); // 새로운 방을 열거나, 기존 방에 socket(사용자)를 추가
    socket.room = roomname; // socket 객체에 room 정보 저장(다른 곳에서도 roomname을 확인할 수 있도록 정보 추가)

    // 방이 있을 때,
    console.log('socket.rooms', socket.rooms); //Set(2){'현재 클라이언트 아이디', '방이름'}
    console.log('socket.room', socket.room); //방이름

    // 3-1. 입장 메시지 모두에게 보내기 (server > client)
    // io.to(roomname).emit('userjoin', `[${socket.id}]님 입장`);

    // 3-2. 입장 메시지 나를 제외하고 보내기 (server > client)
    // broadcast 키워드 : 내가 제외됨
    socket.broadcast.to(roomname).emit('userjoin', `[${socket.id}]님 입장`);
  });

  // 6. client > server, 전체 클라이언트에게 메시지 보내기
  socket.on('message', (msg) => {
    console.log('클라이언트의 메시지!', msg);

    // 내가 포함된 방? >> socket.room
    console.log('내가 포함된 방의 이름', socket.room);

    // 나 포함 전체에게 메시지 전달
    io.to(socket.room).emit('message_toAll', msg, socket.id);
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
