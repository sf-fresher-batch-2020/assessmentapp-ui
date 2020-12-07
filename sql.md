# ASSESSMENTAPP_db

#### Task #1: Create Database
```
create database assessment_db; 
use assessment_db;

```
#### Task 2: Create users table
``` 
create table user(
id int primary key auto_increment,
user_id int not null,
name varchar(50) not null,
email varchar(50) not null,
password varchar(50) not null,
dob date,
gender char(1),
active boolean not null default 1,
created_date timestamp not null default current_timestamp,
modified_date timestamp not null default current_timestamp on update current_timestamp,
unique(email,user_id),
check ( gender in ('M','F'))
);

```

#### Task 2.1: insert values to users
```
insert into user(name,email,password,,dob,gender,role) values ( 'soumiya','soumi@gmail.com', 'pass123','ADMIN','12-11-2020','f'); 
```
#### Task 2.2: List all users
```
select * from user;
```

#### Task 2.3: create question Table
```
 create table assessment_questions( 
id bigint primary key auto_increment,
assessment_id int not null, 
question_id int not null, 
subject varchar(50) not null ); 

``` 

#### Task 2.4: insert values into question table
```
insert into assessment_questions('assessment_id','question_id',subject)values('101','1',sql);
 insert into assessment_questions('assessment_id','question_id',subject)values('101','2',sql); 
```
### Task 2.5: List question list
```
select * from assessment_question;
```
#### Task 3: Create user_assessment table
```
create table user_assessments( 
user_id, assessment_id, start_date, 
completion_date, 
status, result);  
```
#### Task 3.1: insert values to user_assessment
```
insert into user_assessment('1','101','10-11-2020','11-11-2020','completed',pass);
```
#### Task 3.2: list user_assessment
```
select * from user_asessment;
```
### Task 4: create assessment_result table
```
create table assessment_result( 
result varchar(50) not null, 
score int not null );

```
### Task 4.1: insert values to assessment_result
```

insert into(result,score)values('pass','8'); 
insert into(result,score)values('pass'.'7');

```
### Task: 4.2 list assessment_result
```
select * from assessment_result;

```