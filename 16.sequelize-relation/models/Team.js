const TeamModel = (sequelize, DataTypes) => {
  const team = sequelize.define(
    'team',
    {
      team_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(63),
        allowNull: false,
      },
    },
    {
      freezeTableName: true, //테이블 이름 단수형 그대로 유지
    }
  );
  return team;
};

module.exports = TeamModel;
