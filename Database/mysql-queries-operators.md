1. Add column
- `alter table user add password varchar(100)`

2. Drop column
- `alter table user drop password`

3. Modify column
- `ALTER TABLE user modify column password DATE`

4. Concate value
- `select concat(u.username, ' ', u.email) as fname from user u`

5. update query
- `update user set username = 'prince' where userid = 1`

6. Insert into
- `insert into user (name, email) values ('prince', 'prince@gmail.com')`

7. delete
- `delete from user where userid = 1`