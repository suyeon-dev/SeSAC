// 인자1=models/index.js에서 생성된 Sequelize 인스턴스(DB연결, 모델 정의 사용)
// 인자2=Sequelize 모듈에서 제공하는 데이터 타입 라이브러리
const PlayerModel = (sequelize, DataTypes) => {
  /* sequelize.define(param1, param2, param3)
  - param1: 모델(테이블) 이름 설정
  - param2: 컬럼 정의
  - param3: 모델 옵션 정의
  */
  const game = sequelize.define(
    'player',
    //fk 설정은 models/index.js에서 설정
    {
      player_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(63),
        allowNull: false,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true, //테이블 이름 단수형 그대로 유지
    }
  );
  return game;
};

module.exports = PlayerModel;
