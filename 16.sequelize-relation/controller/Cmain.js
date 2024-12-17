// const models = require('../models');
// models={Player:.., Profile:..,} 전체 부르기

const { Op } = require('sequelize'); //sequelize의 연산자 모음(Op.like, Op.gt 등)
const { Player, Profile, Team } = require('../models'); //구조분해

// 0. 메인페이지 렌더링
exports.main = (req, res) => {
  res.render('index');
};

// 1. 전체 선수 조회
// GET /players
exports.getAllPlayers = async (req, res) => {
  try {
    // select * from player;
    const players = await Player.findAll();
    console.log(players);
    res.send(players);
  } catch (err) {
    console.log('err', err);
    res.status(500).send('server error');
  }
};

// 2. 특정 선수 조회
// GET /players/:playerId
// player, profile 정보 조회 >> join 필요!
exports.getPlayer = async (req, res) => {
  try {
    console.log(req.params); //params는 무조건 문자열로 들어옴 {playerId:'2'}
    // route('/players/:playerId')의 'playerId가 key값이 됨
    const { playerId } = req.params; //'2' = 요청 URL에서 playerId값 추출

    const player = await Player.findOne({
      // {모델에서 설정한 기본키 이름: 요청URL에서 추출한 playerId값}
      where: { player_id: playerId },
      // inclue: player와 profile 테이블을 join
      // attributes: Profile에서 보여주고 싶은 컬럼
      // --attributes의 배열은 profile테이블의 컬럼명과 일치해야함
      include: [{ model: Profile, attributes: ['position', 'salary'] }],
    });
    res.send(player);
  } catch (err) {
    console.log('err', err);
    res.status(500).send('server error');
  }
};

// 3. 선수 추가
// POST /players
/* req.body
{
  name: '손흥민',
  age: 30,
  team_id: 1
}
*/
exports.postPlayer = async (req, res) => {
  try {
    console.log(req.body); // 클라이언트 데이터 확인 { name: '손흥민', age: 30, teamid: 1 }
    const newPlayer = await Player.create(req.body); //데이터 기반 새로운 player 생성

    /* 아래 객체랑 req.body 동일
    const newPlayer = await Player.create({
      //컬럼명: 넣을 데이터 -> Sql에서 컬럼명 확인하기
      name: req.body.name,
      age: req.body.age,
      teamid: req.body.teamid})
    */

    res.send(newPlayer);
  } catch (err) {
    console.log('err', err);
    res.status(500).send('server error');
  }
};

// 4. 특정 선수의 소속 팀 변경
// Patch /players/:playerId/team
exports.patchPlayer = async (req, res) => {
  try {
    //업데이트 작업
    console.log(req.body); //수정할 데이터 확인 { teamId: 1 }
    console.log(req.params); // URL에서 playerId 값 확인 { playerId: '2' }

    // updatedPlayer 배열 형태
    const updatedPlayer = await Player.update(
      {
        // param1: 어떤 컬럼을 바꿀 지
        teamid: req.body.teamId,
      },
      {
        // param2: where 조건 작성
        where: {
          player_id: req.params.playerId,
        },
      }
    );
    res.send(updatedPlayer); //수정된 결과 반환
  } catch (err) {
    console.log('err', err);
    res.status(500).send('server error');
  }
};

// 5. 특정 선수 삭제
// DELETE /players/:playerId
exports.deletePlayer = async (req, res) => {
  try {
    console.log(req.params); //URL에서 playerId 값 확인 {playerId: '2'}
    const { playerId } = req.params;
    // destroy : 0(실패), 1(성공)
    const isDeleted = await Player.destroy({
      where: {
        player_id: playerId,
      },
    });
    console.log('삭제 여부', isDeleted);
    if (Boolean(isDeleted)) {
      res.send('삭제 성공');
    } else res.send(false);
    res.send('delete');
  } catch (err) {
    console.log('err', err);
    res.status(500).send('server error');
  }
};

/* 6. 복잡한 where 조건 사용해보기 */
// 6-1. 정렬, 검색 >> req.query 사용
// GET /teams
exports.getTeams = async (req, res) => {
  try {
    console.log(req.query); //URL 쿼리 확인 => {} 또는 {sort} 또는 {search}
    const { sort, search } = req.query;
    //쿼리가 들어올 때와 아닐 때 결과값이 달라야해서 초기화 안 된 teams 선언
    let teams; //값 초기화 x (undefined상태), const 재할당 불가 반드시 let

    if (sort === 'name_asc') {
      //팀을 이름 순으로 정렬해서 전체 조회
      teams = await Team.findAll({
        // SELECT team_id, name
        attributes: ['team_id', 'name'],
        // ORDER BY name ASC
        order: [['name', 'ASC']], //배열 안 배열로 기준 여러 개 설정 가능[[기준1], [기준2], ...]
      });
    } else if (search) {
      //search 키워드 기준으로 검색 후 조회
      // WHERE name LIKE '%K%'
      teams = await Team.findAll({
        attributes: ['team_id', 'name'], // SELECT team_id, name
        // Op 쓰고 엔터쳐서 Sequelize의 연산자 모음인 Operation 객체 불러오기
        where: {
          name: { [Op.like]: `%${search}%` }, //이름에 검색어 포함
        },
      });
    } else {
      //sort가 name_asc가 아니거나, search가 안 들어왔을 때 전체 조회
      teams = await Team.findAll({
        attributes: ['team_id', 'name'],
      });
    }
    // 검색 및 정렬 로직 종료
    // ------ 응답 -------
    // findAll을 통해서 찾아 오기 때문에 teams 결과는 항상 배열
    if (teams.length === 0) res.send('다시 검색하세요. 정보가 없어요.');
    else {
      res.send(teams);
    }
  } catch (err) {
    console.log('err', err);
    res.status(500).send('server error');
  }
};

// 6-2. 특정 팀 조회
// GET /teams/:teamId
exports.getTeam = async (req, res) => {
  try {
    console.log(req.params); // URL에서 teamId 확인 { teamId: '1' }
    const { teamId } = req.params;
    const team = await Team.findOne({
      where: { team_id: teamId },
    });
    res.send(team);
  } catch (err) {
    console.log('err', err);
    res.status(500).send('server error');
  }
};

// 6-3. 특정 팀의 모든 선수 조회 >> JOIN 필요
// GET /teams/:teamId/players
exports.getTeamPlayers = async (req, res) => {
  try {
    const { teamId } = req.params; //1, 2, ...
    /* (1) 특정 팀의 '선수정보만' 조회 (Player) */
    // -- 컬럼 이름(sql에서 확인하기!!), 키 이름 맞춰줘야 함

    // const teamPlayers = await player.findAll({
    //   where: {
    //     teamid: teamId, //player 모델의 외래키: 위에서 선언한 변수
    //   },
    // });

    //(2) 특정 팀의 정보와 해당 팀의 선수까지 확인 > join (Team, Player)
    const teamPlayers = await Team.findOne({
      where: { team_id: teamId }, //기본키 기준
      include: [{ model: Player }], // JOIN: 해당 팀의 선수 정보도 가져옴
    });
    res.send(teamPlayers); // 배열로 반환
  } catch (err) {
    console.log('err', err);
    res.status(500).send('server error');
  }
};
