// In SQL, there are several types of joins that can be used to combine 
// data from two or more tables:

// Inner Join: Returns only the rows that have matching values in both tables.

// SELECT * FROM table1 INNER JOIN table2 ON table1.column = table2.column;

// Left Join: Returns all the rows from the left table and the matched rows 
// from the right table. If there is no match, it returns NULL values for 
// the right table.
// sql
// Copy code
// SELECT * FROM table1 LEFT JOIN table2 ON table1.column = table2.column;
// Right Join: Returns all the rows from the right table and the matched rows 
// from the left table. If there is no match, it returns NULL values for the 
// left table.

// SELECT * FROM table1 RIGHT JOIN table2 ON table1.column = table2.column;

// Full Outer Join: Returns all the rows from both tables and NULL values 
// for the unmatched rows.

// SELECT * FROM table1 FULL OUTER JOIN table2 ON table1.column = table2.column;

// Self Join: Joins a table with itself. This is useful when you want to combine data from the same table based on a common column.

// SELECT * FROM table1 t1 INNER JOIN table1 t2 ON t1.column = t2.column;

// Each type of join serves a different purpose and can be used to 
// solve different types of data retrieval problems.


