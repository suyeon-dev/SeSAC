'use strict';

const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.js')['devel'];
const db = {};

// 1. Sequelize 클래스를 통해서 sequelize 인스턴스(객체)를 생성
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// 2. 모델을 불러오면서 인자로 전달할 정보 전달
// require()(객체, 모듈)
const PlayerModel = require('./Player')(sequelize, Sequelize);
const ProfileModel = require('./Profile')(sequelize, Sequelize);
const GameModel = require('./Game')(sequelize, Sequelize);
const TeamModel = require('./Team')(sequelize, Sequelize);
const TeamGameModel = require('./TeamGame')(sequelize, Sequelize);

// 3. 모델 간 관계 설정

// 4. db 객체에 모델 추가
db.Player = PlayerModel;
db.Profile = ProfileModel;
db.Game = GameModel;
db.Team = TeamModel;
db.TeamGamer = TeamGameModel;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
