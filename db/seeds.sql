INSERT INTO department (name)
VALUES ("Sales"), 
("Engineering"), 
("Programming"),
("Legal");

INSERT INTO role (title, salary, department_id) 
VALUES ("Salesperson", 80000, 1),
       ("Engineering", 120000, 2),
       ("Programming", 95000, 3),
       ("Legal", 130000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Peter", "Wright", 1, NULL),
       ("Eric", "Jones", 3, 1),
       ("Tabitha", "Marquette", 2, 2),
       ("Mary", "Cruz", 4, 3); 