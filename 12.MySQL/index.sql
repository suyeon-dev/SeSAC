show databases;
-- create database [DB명] [DB 기본 문자셋] [데이터 정렬 방식]
create database mydatabase default character set utf8 collate utf8_general_ci;
create database sesac character set utf8mb4 collate utf8mb4_unicode_ci;

/*
utf8
utf8mb4: utf8보다 더 많은 문자열 저장 가능
- 이모지, 특수문자, 다국어...
*/

-- 데이터베이스 사용 선언
use sesac;

-- 테이블 목록 확인
show tables;

-- 데이터베이스 삭제
drop database mydatabase;
show databases;


############# 테이블 관련 명령어 ############# 
/*
create table 테이블이름(
    속성이름1 데이터타입 제약조건,
    속성이름2 데이터타입 제약조건
);
*/
-- 제약조건
-- not null : null을 허용 x
-- auto_increment : 자동 숫자 증가
-- primary key: 기본키 설정 (중복 허용x, null 허용x)
-- default : 기본값 설정
-- unique : 중복 허용x, null값 허용x, 한 테이블에 여러 개 설정 가능

create table products(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    model_number VARCHAR(15) NOT NULL,
    series VARCHAR(30) NOT NULL
);

-- 테이블 목록 확인
show tables;

-- 테이블 구조 확인
desc products;
DROP TABLE products;

-- 테이블 속성 수정
alter table products add new_column varchar(20);

alter table products modify new_column int;

alter table products drop new_column;

############# [여기부터 DML] ############# 
-- 데이터 조작어
-- 데이터 CRUD를 위해 사용하는 SQL문

create table user(
    id int primary key auto_increment,
    name varchar(10) not null,
    age int not null,
    address varchar(100)
);

-- show tables;
-- desc user;

--create : INSERT INTO 구문
INSERT INTO user (name, age, address) VALUES ('김민정', 20, '서울특별시 마포구');
INSERT INTO user (name, age, address) VALUES ('이지수', 22, '서울특별시 강남구');
INSERT INTO user (name, age, address) VALUES ('최솔이', 22, '대구광역시 동구');
INSERT INTO user (name, age, address) VALUES ('한소희', 25, '부산광역시 관악구');
INSERT INTO user (name, age, address) VALUES ('정세희', 19, '서울특별시 노원구');
INSERT INTO user (name, age, address) VALUES ('이형석', 23, '서울특별시 강서구');
INSERT INTO user (name, age, address) VALUES ('김성민', 32, '부산광역시 동구');
INSERT INTO user (name, age, address) VALUES ('박수진', 37, '강원도 강릉시');
INSERT INTO user (name, age, address) VALUES ('권순모', 26, '충청남도 공주시');
INSERT INTO user (name, age, address) VALUES ('진현정', 40, '강원도 속초시');
INSERT INTO user (name, age, address) VALUES ('권희수', 36, '서울특별시 영등포구');

-- Read : SELECT [컬럼이름] FROM [테이블 이름] (WHERE)
select * from user; --전체 컬럼 전체 조회
select name from user; --특정 컬럼만 전체 조회
select age, name from user;--특정 컬럼 2개 전체 조회

-- where절을 이용해서 조건 걸기
select * from user where age >= 25; -- 이상
select * from user where id=3; --일치 비교
select id, age from user where name='권순모';

-- like 패턴 조회
select * from user where address like '서울%'; --서울로 시작하는 주소값
select * from user where name like '__희'; --마지막 글자가 희인 사람
select * from user where name like '%희%'; --이름에 '희'가 들어가는 사람
select * from user where address like '%광역시%';

-- IN(list)
select * from user where age in(20, 21, 22, 23); --나이가 20,21,22,23살 중 하나

-- between a and b : a와 b는 포함
select * from user where age between 25 and 30; --25 이상 30살 이하
-- IS NULL, IS NOT NULL
insert into user(name, age) values('서현승', 28);
-- 주소가 null인 사람 조회
select * from user where address is null;
-- 주소가 null이 아닌 사람 조회
select * from user where address is not null;

-- 논리 연산자
-- 주소가 null이 아니면서, age가 25 초과인 전체 속성
select * from user where address is not null and age > 25;
-- 최씨이고, 나이가 22인 사람
select * from user where name like '최%' and age=22;

-- 서울에 살거나 김씨인 사람
select * from user where address like '%서울%' or name like'김%';

-- order by, distinct, limit
select * from user order by age desc; --age 기준 내림차순
-- id가 6보다 큰 것을 조회하고 난 후, age 기준으로 오름차순 정렬
select * from user where id>6 order by age asc;
select age from user order by age asc;
select distinct age from user order by age asc;

-- 서울시에서 사는 사람의 이름과 주소 조회(~2명)
select name, address 
from user 
where address like '서울%' 
order by name ASC 
limit 3;


show databases;
---update문
-- UPDATE 테이블 이름
-- SET 컬럼명="바꿀 데이터"

update user set address="서울특별시 도봉구" where id=1;
update user set address="제주특별자치도 제주시", name="이지현" where id=2;

--delete문
/*
DELETE FROM 테이블 이름
WHERE 조건
*/
delete from user where id>8;
select * from user;

create table student(
    id int auto_increment primary key,
    name varchar(10) not null default '홍길동',
    hobby varchar(20)
);

desc student;

insert into student(hobby, name) values('등산', '박상우');

select * from student;

-- having과 group by
drop table if exists user; --user 테이블 존재할 경우 삭제
show tables;

--enum: 타입을 강력하게 제어
create table user(
    user_id int primary key auto_increment,
    name varchar(10) not null,
    specialize enum('축구', '야구', '클라이밍', '배드민턴') not null, 
    gender enum('남', '여') not null,
    career_year int not null
)

desc user;

INSERT INTO user VALUES(NULL, '김판곤', '축구', '남', 40);
INSERT INTO user VALUES(NULL, '손흥민', '축구', '남',15);
INSERT INTO user VALUES(NULL, '김자인', '클라이밍', '여',10);
INSERT INTO user VALUES(NULL, '김동우', '축구', '남',1);
INSERT INTO user VALUES(NULL, '전유진', '배드민턴', '여',2);
INSERT INTO user VALUES(NULL, '이대호', '야구', '남',24);
INSERT INTO user VALUES(NULL, '안세영', '배드민턴', '여',11);
INSERT INTO user VALUES(NULL, '배서연', '클라이밍', '여',3);
INSERT INTO user VALUES(NULL, '황희찬', '축구', '남',9);
INSERT INTO user VALUES(NULL, '지소연', '축구', '여',17);
INSERT INTO user VALUES(NULL, '이정후', '야구', '남',11);
INSERT INTO user VALUES(NULL, '김광현', '야구', '남',21);

select * from user;

-- 집계함수 사용해보기
-- count, sum, avg, min, max
select count(specialize) from user where specialize="축구"; 
--specialize 가 축구인 튜플의 개수 (5)
select sum(career_year) from user; --전체 선수의 경력 합
select sum(career_year) from user where specialize="축구"; --전체 선수의 경력 합
select avg(career_year) from user where specialize="축구"; --축구 선수의 경력 평균
select min(career_year) from user where specialize="축구"; --축구선수 중 경력이 가장 적은 사람
select max(career_year) from user where specialize="축구" ;--축구선수 중 경력이 가장 많은 사람

-- group by (같은 그룹끼리 묶어서 조회)
select specialize from user group by specialize; --축구, 클라이밍, 배드민턴, 야구
select specialize, count(specialize) from user group by specialize;--축구5, 클라이밍2, 배드민턴2, 야구3

--having
select specialize, count(specialize) 
from user 
where gender='여' group by specialize 
having count(specialize)>=2; --having: group화 된 테이블에 조건을 다는 것