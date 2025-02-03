const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // 모델 이름, 컬럼 정보, 옵션 값
  return sequelize.define(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {},
    {}
  );
};
