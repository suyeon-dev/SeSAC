const express = require('express');
const app = express();
const PORT = 8080;
const { sequelize } = require('./models');
// db={sequelize:~~, Sequelize: ~~};
// const {sequelize} = db;

// 미들웨어 설정
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 라우터 설정
const indexRouter = require('./routes');
app.use('/', indexRouter);

// sync(): DB와 소통
sequelize
  .sync({ force: false })
  .then(() => {
    console.log('db connection success!');
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log('DB connection error');
    console.log('err', err);
  });
