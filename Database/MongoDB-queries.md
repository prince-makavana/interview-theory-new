1. $sort
2. $match
3. $gt
4. $lt
5. $project
6. $max
7. $min
8. $count
9. $sum
10. $avg
11. $addFields
12. $set
13. $unset
14. $cond
15. $eq
16. $skip
17. $limit
18. $unwind
19. $group
20. $lookup
21. $ne
22. $redact

## Interview Questions
1) Find 5th largest salary emplyee name and salary from employee and salary table.
ANS.
employees.lookup({
to: id,
from: empId,
collectionName: salaries,

}).sort('salary', -1).skip(4).project({employees.name: 1, salaries.salary: 1})
