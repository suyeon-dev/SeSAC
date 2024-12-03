-- Active: 1732688614857@@127.0.0.1@3306@sprint
show databases;

use sprint;

create table visitors(
    id int not null primary key auto_increment,
    name varchar(10) not null,
    comment mediumtext
);

desc visitors;

-- data 삽입
insert into visitors(name, comment) values('베베', '어렵당');
insert into visitors values(null, '??', 'MySQL이 절 때렸어요');
insert into visitors value(null, '삭제예정', '호호호호');

--data 조회
select * from visitors;

--data 수정
---수정 삭제는 Where 조건
update visitors set comment="MVC가 절 때렸음" where id=2;
--data 삭제
delete from visitors where id=3;

############# DCL ############# 
-- 현재 세션의 사용자와 호스트 정보 반환 ex) root@localhost
select user();

--mySQL 사용자 조회
select * from mysql.user;
alter user 'suyeon'@'%' IDENTIFIED with caching_sha2_password by '1125';
show grants for 'suyeon'@'%'
