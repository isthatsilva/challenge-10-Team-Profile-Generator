const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Employee = require('./lib/Employee');

const generateHTML = require('./src/generateHTML');

const team = [];

// add manager
const addManager = () => {
    return inquirer.prompt([
        {
            type:"input",
            name:"name",
            message:"Please enter the name of the manager of the team.",
        },
        {
            type:"input",
            name:"id",
            message:"Please enter the manager's ID.",
        },
        {
            type:"input",
            name:"email",
            message:"Please enter the manager email address.",
        },
        {
            type:"input",
            name:"officeNumber",
            message:"Please enter the office number.",
        },
    ])
    .then (managerInput => {
        const {name, id, email, officeNumber} = managerInput;
        const manager = new Manager (name, id, email, officeNumber);
        team.push(manager);
        console.log(manager);
    })
}

// add employee
const addEmployee = ()=> {
    console.log(`
    Adding new employee
    `)
    return inquirer.prompt([
        {
            type:"list",
            name:"role",
            choices:["Engineer", "Intern"]
        },
        {
            type:"input",
            name:"name",
            message:"Please enter the name of the employee.",
        },
        {
            type:"input",
            name:"id",
            message:"Please enter the employee's ID.",
        },
        {
            type:"input",
            name:"email",
            message:"Please enter the employee's email address.",
        },
        {
            type:"input",
            name:"github",
            when: (input) => input.role === "Engineer",
            message:"Please enter the engineer's GitHub username.",
        },
        {
            type:"input",
            name:"school",
            when: (input) => input.role === "Intern",
            message:"Please enter the intern's school name.",
        },
        {
            type: "confirm",
            name:"addMember",
            message:"Would you like to add an employee to the team?",
            default: false
        }
    ])
    .then (employeeInput=>{
        let {name, id, email, role, github, school, addMember} = employeeInput;
        let employee;
        
        if (role === "Engineer"){
            employee = new Engineer (name, id, email, github);
            console.log(employee)
        }
        
        if (role === "Intern"){
            employee = new Intern (name, id, email, school);
            console.log(employee)
        }

        team.push(employee);

        // adding another employee will run addEmployee again
        if (addMember) {
            return addEmployee(team);
        }
        else{
            return team;
        }
    })
};

// generates the HTML page
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        }
        else {
            console.log("Your team profile has been generated successfully! Please check the index.html")
        }
    })
};

addManager()
    .then (addEmployee)
    .then (team => {
        return generateHTML(team);
    })
    .then (pageHTML => {
        return writeFile(pageHTML);
    })
    .catch (err => {
        console.log(err);
    });