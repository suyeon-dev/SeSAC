'use strict';

//라이브러리 가져오기
const Sequelize = require('sequelize');
//설정 파일(config.js)에서 'devel' 키의 값을 가져옴
const config = require(__dirname + '/../config/config.js')['devel'];
//빈 객체 생성: DB 모델 및 설정을 담아 외부로 보낼 예정
const db = {};

// 1. Sequelize 클래스를 통해서 sequelize 인스턴스(객체)를 생성
const sequelize = new Sequelize(
  config.database, //DB 이름
  config.username, //DB 사용자 이름
  config.password, //DB 비밀번호
  config //DB 설정 정보(host, dialect 등)
);
// sequelize를 사용해 DB에 연결하는 객체 생성
// config값은 config.js 파일에서 가져온 정보로 설정됨

// 2. 모델을 불러오면서 인자로 전달할 정보 전달
// require()(객체, 모듈): 각 모델 파일에서 Sequelize와 설정값을 인자로 받음
const PlayerModel = require('./Player')(sequelize, Sequelize);
const ProfileModel = require('./Profile')(sequelize, Sequelize);
const GameModel = require('./Game')(sequelize, Sequelize);
const TeamModel = require('./Team')(sequelize, Sequelize);
const TeamGameModel = require('./TeamGame')(sequelize, Sequelize);

// 3. 모델 간 관계 설정 (1:1, 1:n, n:n)
// 3-1. Player:Profile=1:1
PlayerModel.hasOne(ProfileModel, {
  onDelete: 'CASCADE', //Player 삭제 시 Profile도 삭제됨
  onUpdate: 'CASCADE', //Player 업데이트 시 Profile도 업데이트됨
  // model Player에서 기본키 확인
  foreignKey: 'player_id', //Profile 외래키가 Player의 player_id참조
});
ProfileModel.belongsTo(ProfileModel, {
  foreignKey: 'player_id', //Profile 테이블이 Player 테이블 참조하는 관계
});

// 3-2. Team:Player=1:N
TeamModel.hasMany(PlayerModel, {
  foreignKey: 'teamid', //내가 정해주는 이름: Player에서 팀을 참조할 외래키 설정
  sourceKey: 'team_id', //실제로 참조할 이름: Team 테이블에서 실제 참조할 키
  // 실제 team model의 컬럼명과 일치해야 함
  // models/Team.js의 primary key
});
PlayerModel.belongsTo(TeamModel, {
  foreignKey: 'teamid', //내가 정해주는 이름: Player에서 팀을 참조하는 외래키 이름
  targetKey: 'team_id', //실제로 참조할 이름: Team테이블의 실제 키
});

// 3-3. Team:Game=M:N
// 다대다 관계 설정: 중계테이블 teamgame 활용해야함
TeamModel.belongsToMany(GameModel, {
  through: TeamGameModel, //중계 테이블을 통한 연결
  foreignKey: 'team_id', //내가 정해주는 이름: Team테이블에서 사용할 외래키
});
GameModel.belongsToMany(TeamModel, {
  through: TeamGameModel,
  foreignKey: 'game_id', // 내가 정해주는 이름:Game테이블에서 사용할 외래키
});

// 4. db 객체에 모델 추가
// 모델 불러오고 나서 따로 추가해줘야 함
// db.Player =require('./Player')(sequelize, Sequelize);
db.Player = PlayerModel;
db.Profile = ProfileModel;
db.Game = GameModel;
db.Team = TeamModel;
db.TeamGamer = TeamGameModel;

db.sequelize = sequelize; //1번의 설정값: Sequelize 인스턴스를 db객체에 추가(DB연결 설정)
db.Sequelize = Sequelize; //모듈: Sequelize 모듈 자체를 추가(데이터타입 라이브러리 포함)

module.exports = db;
