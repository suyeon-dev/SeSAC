############# 과제1 DDL ############# 
create database sprint character set utf8mb4 collate utf8mb4_unicode_ci;
use sprint;
show tables;

-- (Q) default null ?
create table member(
    id varchar(20) not null primary key,
    name VARCHAR(5) not null,
    age int, -- 기본값 Null
    gender VARCHAR(2) not null,
    email varchar(50),
    promotion varchar(2)
);

-- 테이블 목록 확인
show tables;
-- 테이블 구조 확인
desc member;

############# 과제2 DDL #############
-- member 테이블을 alter 명령어를 사용해 구조 변경
 alter table member modify id varchar(10);
 desc member;

 alter table member drop age;

 alter table member add interest varchar(100);

############# 과제3 CREATE문 #############
-- user 테이블 생성
create table user(
    id varchar(10) not null primary key,
    pw varchar(20) not null,
    name varchar(5) not null,
    gender enum('F', 'M', '') default '',
    birthday date not null,
    age int(3) not null default 0
)

desc user;

############# 과제4 INSERT문 #############
insert into user (id, pw, name, gender, birthday, age) values('hong1234', '8o4bkg', '홍길동', 'M', '1990-01-31', 33);
insert into user (id, pw, name, gender, birthday, age) values('sexysung', '87awjkdf', '성춘향', 'F', '1992-03-31', 31);
insert into user (id, pw, name, gender, birthday, age) values('power70', 'qxur8sda', '변사또', 'M', '1970-05-02', 53);
insert into user (id, pw, name, gender, birthday, age) values('hanjo', 'jk48fn4', '한조', 'M', '1984-10-18', 39);
insert into user (id, pw, name, gender, birthday, age) values('widowmaker', '38wifh3', '위도우', 'F', '1976-06-27', 47);
insert into user(id, pw, name, gender, birthday, age) values('dvadva', 'k3f3ah', '송하나', 'F', '2001-06-03', 22);
insert into user (id, pw, name, gender, birthday, age) values('jungkrat', '4ifha7f', '정크랫', 'M', '1999-11-11', 24);

-- Read: SELECT [컬럼이름] FROM [테이블이름] (WHERE
select * from user;

############# 과제5 SELECT문 #############
-- user 테이블에서 각 조건을 만족하는 sql문 작성
-- 1
select * from user order by birthday asc;
-- 2
select * from user where gender = 'M' order by name desc;
--3
select id, name from user where birthday between '1990-1-1' and '1999-12-31';
--4
select * from user where month(birthday)=6 order by birthday asc;
-- 5
select * from user where gender = 'M' and birthday between '1970-1-1' and '1979-12-31';
-- 6
select * from user order by age desc limit 3;
-- 7
select * from user where age between 25 and 50;
--8
update user set pw='12345678' where id='hong1234';
--9
delete from user where id='jungkrat';