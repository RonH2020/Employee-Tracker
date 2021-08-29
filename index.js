const inquirer = require("inquirer");
const mysql = require("mysql2");

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Deuce2121',
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

            }
        
    })
}

function viewEmployees() {
    db.query('SELECT * FROM employee',function (err, results) {
        console.log(results);
        start();
    });
}

