'use strict';

const Sequelize = require('sequelize');
let config = require(__dirname + '/../config/config.js')['development']; //객체[key]
console.log(config);
// 문자열로 처리되는 development, production 때문에 .접근법이 아니라 대괄호 접근법
config = config['development'];

console.log('config', config);
const db = {};

let sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

/* 설정 정보를 sequelize라는 키안에 넣어주는 중 */
db.sequelize = sequelize; //객체.key = 설정값
// {
//   sequelize: sequelize
// }

/* Sequelize 모듈을 Sequelize라는 key 안에 넣어주는 중 */
db.Sequelize = Sequelize;
// {
//    sequelize: sequelize;
//   Sequelize: Sequelize;
// }

/* models > Visitor.js 함수 호출*/
db.Visitor = require('./Visitor')(sequelize, Sequelize);
// {
//   sequelize: sequelize;
//   Sequelize: Sequelize;
//   Visitor: visitor의 모델(Sequelize.define의 값)
// }

module.exports = db; // app.js에서 사용
