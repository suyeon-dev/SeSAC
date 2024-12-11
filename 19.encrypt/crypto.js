const crypto = require('crypto');
/* 
[1] cryto를 통해 단방향 암호화 구현 : 복호화 불가능
- createHash(알고리즘)
- pdkdf2Sync(비밀번호, 솔트, 반복횟수, 키의 길이, 알고리즘)
*/

// [1]-1. createHash(알고리즘).update(암호화하고 싶은 평문).digest(인코딩방식)
// 인코딩 방식: base64, hex(16진수), ascii, binary
// digest: 암호화된 문장을 우리가 읽을 수 있는 문자열로 인코딩하는 것
const createHashPW = (pw) => {
  return crypto.createHash('sha512').update(pw).digest('base64');
};

console.log(createHashPW('1234'));
console.log(createHashPW('1234'));
console.log(createHashPW('1234')); //전부 똑같은 값
console.log(createHashPW('1234.')); //조금만 변해도 전혀 다른 해시값이 나옴

// [1]-2. pdkdf2Sync(비밀번호, 솔트, 반복횟수, 키의길이, 알고리즘).toString(인코딩방식)
function saltAndHashPw(pw) {
  const salt = crypto.randomBytes(16).toString('base64');
  const iterations = 100;
  const keylen = 64;
  const algorithm = 'sha512';

  const hash = crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, algorithm) //Buffer 형식(2진데이터를 다룸) 객체를 리턴하는 중
    .toString('base64');
  return { salt, hash }; //{salt:salt, hash:hash}
} //DB에 salt와 hash 모두 저장해야함

console.log('pbkdf2Sync : ', saltAndHashPw('1234'));
console.log('pbkdf2Sync : ', saltAndHashPw('1234'));
console.log('pbkdf2Sync : ', saltAndHashPw('1234'));
console.log('pbkdf2Sync : ', saltAndHashPw('1234'));
//salt값이 매번 달라서 hash값도 매번 다름, salt값이 같다면 hash값도 같음

// 암호 비교 함수
function checkPw(inputPw, savedSalt, savedHash) {
  const iterations = 100; //반복횟수 saltAndHashPw와 같아야 함
  const keylen = 64; //saltAndHashPw와 같아야 함
  const algorithm = 'sha512'; //saltAndHashPw와 같아야 함

  // pbkdf2Sync의 모든 인자가 똑같다면 해시값도 똑같다
  const hash = crypto
    .pbkdf2Sync(inputPw, savedSalt, iterations, keylen, algorithm) //
    .toString('base64');

  return hash === savedHash;
  // 지금 암호화한 값 = 기존 암호화 값
}

const realPw = 'qwer1234';
console.log('-----------------------------');
const data = saltAndHashPw(realPw);
console.log(data);
const { salt: DBsalt, hash: DBhash } = data; //{암호화할 때 사용된 salt, }
console.log('--------비밀번호 일치 여부 확인---------');
const isMatch = checkPw('qwer1234!', DBsalt, DBhash);
const isMatch2 = checkPw('qwer1234', DBsalt, DBhash);
console.log(isMatch); //false, 비밀번호 불일치
console.log(isMatch2); //true, 비밀번호 일치

// =========================================================
console.log('=========================================================');
/* 
[2] 양방향 알고리즘
- createClipheriv: 암호화
- createDecipheriv: 복호화
*/

const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16); // (비밀수)
const algorithm = 'aes-256-cbc'; //aes-256버전,
const originalMessage = 'hello, World!'; //원본 메시지, 평문

// 암호화
function encrypt(text) {
  //1. 암호화 객체 생성
  //   const cipher = crypto.createCipheriv(algorithm, key, iv);
  const cipher = crypto.createCipheriv(algorithm, key, iv);

  //2. 실제 데이터 암호화
  //   let encrypted = cipher.update(평문, '입력인코딩', '출력인코딩');
  let encrypted = cipher.update(text, 'utf8', 'base64');

  //3. 최종 결과 생성
  encrypted += cipher.final('base64');
  return encrypted; //암호화된 데이터
}
console.log(encrypt(originalMessage));
console.log(encrypt(originalMessage));

// 복호화
function decrypt(encryptedText) {
  // 1. 복호화 객체 생성
  const decipher = crypto.createDecipheriv(algorithm, key, iv);

  // 2. 실제 데이터 복호화
  // base64방식으로 인코딩된 문자열이 utf8로 복호화됨
  let decrypted = decipher.update(encryptedText, 'base64', 'utf-8');

  // 3. 최종 결과 생성
  decrypted += decipher.final('utf-8');
  return decrypted;
}

const encryptedMessage = encrypt(originalMessage);
console.log('암호화된 문장', encryptedMessage);

const decryptedMessage = decrypt(encryptedMessage);
console.log('복호화된 문장', decryptedMessage);
