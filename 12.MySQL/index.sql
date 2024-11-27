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