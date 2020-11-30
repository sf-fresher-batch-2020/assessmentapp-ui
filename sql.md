create database assessment_db;
use assessment_db;
/*..login .. */ 
create table user(
id int primary key auto_increment,
name varchar(50) not null,
email varchar(50) not null,
password varchar(50) not null,
role varchar(10) not null,
dob date,
gender char(1),
active boolean not null default 1,
created_date timestamp not null default current_timestamp,
modified_date timestamp not null default current_timestamp on update current_timestamp,
unique(email),
check ( gender in ('M','F')),
check (role in ('USER','ADMIN'))
);
 /* .. Load Sample Data .. */ 
insert into user(name,email,password,,dob,gender,role) values ( 'soumiya','soumi@gmail.com', 'pass123','ADMIN','12-11-2020','f');
insert into user(name,email,password,dob,gender,role) values ( 'shana','sha@gmail.com', 'pass123',USER','11-11-2020','f');
insert into user(name,email,password,dob,gender,role) values ( 'abi','abi@gmail.com', 'pass123','USER','10-11-2020','f');
/* .. List All Users .. */ 
select * from users;


create table question(
id int primary key auto_increment);
/* .. Load Sample Data .. */ 
insert into users (id) values ('1');
insert into users (id) values ('2');
 /* .. Load Sample Data .. */ 
create table asssign_assessments_user(
user_id int not null,
assessment_id int not null,
subject varchar(50) not null
);
 /* .. Load Sample Data .. */ 
 insert into assign_assessment_user('user_id','assessment_id','subject')values('1','101','sql');
 select * from assign_assessment_user
 
create table assessment_questions(
id bigint primary key auto_increment,,
assessment_id int not null,
question_id int not null,
subject varchar(50) not null
);
 /* .. Load Sample Data .. */ 
 insert into assessment_questions('assessment_id','question_id',subject)values('101','1',sql);
 insert into assessment_questions('assessment_id','question_id',subject)values('101','2',sql);
 select * from assessment_question;
 
create table user_assessments(
user_id, assessment_id, start_date, completion_date, status, result);
 /* .. Load Sample Data .. */ 
 insert into user_assessment('1','101','10-11-2020','11-11-2020','completed',pass);
 select * from user_asessment;
 
 create table assessment_result(
 result varchar(50) not null,
 score int not null
 );
  /* .. Load Sample Data .. */ 
  insert into(result,score)values('pass','8');
  insert into(result,score)values('pass'.'7');
  select * from assessment_result;
