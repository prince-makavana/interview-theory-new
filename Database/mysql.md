### How to optimize query

1) Avoid using SELECT * in query always specify column
2) Optimize query performance with indexing strategy
3) Avoid using a wildcard LIKE '%prince' clause (The LIKE '%prince' clauses a full table scan)
4) User innerjoin instead outer join

### Mostly asked interview query 

1. # Find second largest value
- select price from products p order by p.price desc limit 1 offset 1

2. # Change gender male to female and female to male
- UPDATE demo.users
  SET gender =
    CASE
        WHEN gender = 'female' THEN 'male'
        WHEN gender = 'male' THEN 'female'
    END;

3. # Normalization

1) 1NF
- In 1NF, all attribute values are atomic, meaning they cannot be divided into smaller pieces. Each column in a table contains only one value per cell.
- each row needs to have a primary key, and each field needs to contain a single value.

2) 2NF
   - All non key attributes depends on primary key only.

3) 3NF
   - 

4. # What is index?
- Indexes are used to find rows with specific column values quickly. Without an index, MySQL must begin with the first row and then read through the entire table to find the relevant rows.

5. # how to set NA if lname is not there
- SELECT 
    CONCAT(u.username, ' ', CASE WHEN u.email IS NOT NULL AND u.email <> '' THEN u.email ELSE 'NA' END) AS fname FROM user u;

6. # ACID properties
   1. Atomicity => Ensures that transaction is treated as single. Either all the operations with in the transactions are completed successfully or non of them are. if any part fail then whole transaction are rollback to its original state 
   2. Consistency => Ensures that transactions only bring the database from one valid state to another.
   3. Isolation => Concurrent trasactions, those happening at the same time, do not interfere with each other, Each transaction appear to be isolated from each other, even if they are accessing the same data, this prevents data corruption that could occur if multiple transactions tried to modified the same data.
   4. Durability => Once the transaction changes commited, the the changes made to the database become parmenant. 

7. # What is SQL injection?
- 

8. # How can we prevent sql injection?
- 

9. # How can we perform joins in sequelize?
- 

10. # 