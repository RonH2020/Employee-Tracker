const inquirer = require("inquirer");
const mysql = require("mysql2");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '062Outlaw0797414$$',
    database: "employee_db"
},
start()
);

function start() {
    inquirer.prompt([{
        name: "option",
        message: "What would you like to do?",
        type: "list",
        choices: ["View all employess", "View all departments", "View roles", "Add employee", "Add role", "Add department", "Update employee role"]
    }])
    .then(response => {
        console.log(response.option) 
            switch (response.option) {
                case "View all employees":
                    viewEmployees();
                    break;
                
                case "View all departments":
                    viewDepartments();
                    break;

                case "View roles":
                    viewRoles();
                    break;
                
                case "Add employee":
                    addEmployee();
                    break;

                case "Add role":
                    addRole();
                    break;
        
                case "Add department":
                    addDeparment();
                    break;

                case "Update employee role":
                    updateEmployeeRole();
                    break;

            }
        
    })
}

function viewEmployees() {
    db.query('SELECT * FROM employee',function (err, results) {
        console.log(results);
        start();
    });
}

function viewDepartments() {
    db.query('SELECT * FROM department',function (err, results) {
        console.log(results);
        start();
    });
}

function viewRoles() {
    db.query('SELECT * FROM role',function (err, results) {
        console.log(results);
        start();
    });
}

function addEmployee() {
    db.query("INSERT INTO employee (first_name, last_name) values ('Ronald, Holden') ",function (err, results) {
        console.log(results);
        start();
    });
}
function addRole() {
    db.query("INSERT INTO role (title) values ('Software_Engineer')",function (err, results) {
        console.log(results);
        start();
    });
}
function addDeparment() {
    db.query("INSERT INTO department (name) values ('Software')",function (err, results) {
        console.log(results);
        start();
    });
}
function updateEmployeeRole() {
    db.query("UPDATE role SET title = 'Programming', salary = '95000' WHERE department_id = 2; ",function (err, results) {
        console.log(results);
        start();
    });
}

