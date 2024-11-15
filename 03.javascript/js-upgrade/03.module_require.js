//module1.js의 모든 데이터 객체 형태로 가져오기
const module1 = require('./03.module01.js');
console.log(module1);

// 가지고 오고 싶은 데이터만 가져오기 (객체 구조분해 할당)
const { colors } = require('./03.module01');
console.log(colors);

// 가져오는 방식은 똑같음!
const module2 = require('./03.module02.js');
console.log(module2);

const { name, sayHi } = require('./03.module02.js');
console.log(name);
sayHi();
