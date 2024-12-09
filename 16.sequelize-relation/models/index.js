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

// 3. 모델 간 관계 설정 (1:1, 1:n, n:n)
// 3-1. Player:Profile=1:1
PlayerModel.hasOne(ProfileModel, {
  onDelete: 'CASCADE',
  onUpdate: 'CASCADE',
  // model Player에서 기본키 확인
  foreignKey: 'player_id',
});
ProfileModel.belongsTo(ProfileModel, {
  foreignKey: 'player_id',
});

// 3-2. Team:Player=1:N
TeamModel.hasMany(PlayerModel, {
  foreignKey: 'teamid', //내가 정해주는 이름
  sourceKey: 'team_id', //실제로 참조할 이름
  // 실제 team model의 컬럼명과 일치해야 함
  // models/Team.js의 primary key
});
PlayerModel.belongsTo(TeamModel, {
  foreignKey: 'teamid', //내가 정해주는 이름
  targetKey: 'team_id', //실제로 참조할 이름
});

// 3-3. Team:Game=M:N
// 중계테이블 teamgame 활용해야함
TeamModel.belongsToMany(GameModel, {
  through: TeamGameModel, //중계 테이블
  foreignKey: 'team_id', //내가 정해주는 이름, for team model
});
GameModel.belongsToMany(TeamModel, {
  through: TeamGameModel,
  foreignKey: 'game_id', // 내가 정해주는 이름
});

// 4. db 객체에 모델 추가
// 모델 불러오고 나서 따로 추가해줘야함

// 이전에는 관계설정 필요없이 테이블 하나씩만 하면 되니까 불러옴과 동시에 추가함
// db.Player =require('./Player')(sequelize, Sequelize);
db.Player = PlayerModel;
db.Profile = ProfileModel;
db.Game = GameModel;
db.Team = TeamModel;
db.TeamGamer = TeamGameModel;

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
