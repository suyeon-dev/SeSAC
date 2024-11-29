show tables;

create table customer (
    id varchar(10) primary key,
    name varchar(10) not null,
    birthday date not null
);

desc customer;

insert into customer 
values('aaa', '손흥민', '1992-03-17');
insert into customer 
values('bbb', '황희찬', '1997-11-01');
insert into customer 
values('ccc', '이강인', '2001-05-31');
insert into customer 
values('ddd', '조현우', '1992-03-17');

select * from customer;

--외래키 테이블
-- 1. ON UPDATE CASCADE : 기준 테이블의 데이터가 변경되면, 참조 테이블의 데이터도 변경
-- 즉, 회원테이블의 id가 변경되면 구매테이블의 customrer_id가 같이 변경됨

-- 2. ON DELETE CASCADE : 기준 테이블의 데이터가 삭제되면, 참조 테이블의 데이터도 삭제
-- 즉, 회원테이블의 데이터가 삭제되면 구매테이블의 데이터도 함께 삭제됨

create table orderlist(
    id int AUTO_INCREMENT PRIMARY KEY,
    customer_id varchar(10) not null,
    product_name VARCHAR(20) not null,
    quantity INT,
    Foreign Key (customer_id) REFERENCES customer(id) ON UPDATE CASCADE ON DELETE CASCADE
)

--테이블 삭제 시 
-- 1. 구매테이블(orderlist; 외래키 있는 테이블) 먼저 삭제 
-- 2. 회원테이블(customer; 참조되는 기본키가 있는 테이블) 나중 삭제

desc orderlist;

insert into orderlist (customer_id, product_name, quantity)
values('aaa', '맥북', 1);
insert into orderlist (customer_id, product_name, quantity)
values('bbb', '빅파이', 31);
insert into orderlist (customer_id, product_name, quantity)
values('ccc', '키보드', 3);
insert into orderlist (customer_id, product_name, quantity)
values('bbb', '초코파이', 5);
insert into orderlist (customer_id, product_name, quantity)
values('ccc', '귀여운 텀블러', 2);

-- (!) customer 테이블에 없는 회원은 구매할 수 없음
-- insert into orderlist (customer_id, product_name, quantity)
-- values('fff', '맥북', 1);

select * from orderlist;

-- ##################################
-- JOIN : 두 테이블을 묶어서 하나의 테이블로 만듦

-- INNER JOIN 
-- 1. INNER JOIN과 ON 사용
select * 
from customer 
    inner join orderlist 
    on customer.id = orderlist.customer_id;

-- 2. WHERE로 inner 조인 사용
select * 
from customer, orderlist
where customer.id = orderlist.customer_id;

-- 3. INNER JOIN과 ON 사용, where 조회 조건 추가
select * 
from customer 
    inner join orderlist 
    on customer.id = orderlist.customer_id
    where quantity >= 5;
    
-- 4. WHERE로 INNER Join, 조회 조건 추가
select * 
from customer 
    inner join orderlist 
    on customer.id = orderlist.customer_id and quantity >= 5;
    -- where 조인조건 and 조회조건

-- 5. 특정 컬럼 조회
select orderlist.id, customer.id, customer.name, 
orderlist.product_name, orderlist.quantity
from orderlist, customer
where customer.id = orderlist.customer_id;

--6. 테이블에 별칭 지어서 접근(as)
select c.id, o.customer_id, c.name, o.product_name, o.quantity
from customer as c, orderlist as o
where c.id=o.customer_id;

-- **** [left outer join, right outer join]
SELECT *
FROM orderlist LEFT OUTER JOIN customer
ON orderlist.customer_id=customer.id;
SELECT *
FROM orderlist RIGHT OUTER JOIN customer
ON orderlist.customer_id=customer.id;

-- natural join
-- 같은 컬럼이 없어서 안됨
select *
from orderlist natural join customer;


-- ############# DCL ###############
desc mysql.user;

select * from mysql.user;

create user 'user2'@'localhost' identified by '1234';

show grants; --권한 확인

show grants for 'user2'@'localhost'; --(권한 확인) 권한이 없음...
drop user 'user2'@'localhost';

-- mysql_native_password : sql 인증 정책
alter user 'root'@'localhost' identified with mysql_native_password by '바꿀 비밀번호'; --mysql root 비밀번호 변경