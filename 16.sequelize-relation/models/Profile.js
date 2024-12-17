// param1: models/index.js에서 생성된 Sequelize인스턴스(DB연결, 모델 정의 사용)
// param2: Sequelize모듈에서 제공하는 데이터타입 라이브러리
const ProfileModel = (sequelize, DataTypes) => {
  //sequelize.define('profile', {colum:{}, column:{}, ...}, {option})
  const Profile = sequelize.define(
    'profile',
    {
      profile_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      position: {
        type: DataTypes.STRING(63),
        allowNull: false,
      },
      salary: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return Profile;
};

module.exports = ProfileModel;
