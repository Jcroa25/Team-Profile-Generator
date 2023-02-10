const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const { choices } = require('yargs');
const { throwStatement } = require('@babel/types');
const teamArray = [];
const getManager = () => {
    return inquirer.prompt([
        {
         type: 'input',
         name: 'name',
         message: 'Input managers name'
        },
        {
         type: 'input',
         name: 'id',
         message: 'Input managers ID'
        },
        {
         type: 'input',
         name: 'email',
         message: 'Input managers email'
        },
        {
         type: 'input',
         name: 'officeNumber',
         message: 'Input managers office number'
        }
    ])
        .then((managerInput) => {
            const { name, id, email, officeNumber } = managerInput;
            const manager = new Manager(name, id, email, officeNumber);
            teamArray.push(manager);
            getEmployee();
        })
        .catch((err) => console.error(err));
};

const getEmployee = () => {
    return inquirer.prompt([
        {
         type: 'list',
         name: 'role',
         message: 'Add Employee',
         choices: ['Engineer', 'Intern', 'No More Employees']
        },
    ])
    .then((employeeInput) => {
        switch (employeeInput.role) {
          case 'Engineer':
           return getEngineer();
          case 'Intern':
           return getIntern();
          case 'No More Employees':
           return fs.writeFile('./dist/index.html', generateHTML(teamArray), (err) =>
            err ? console.log(err) : console.log('index.html created')
         );
        }
    })
    .catch((err) => console.error(err));

};

const getEngineer = () => {
    return inquirer.prompt([
        {
         type: 'input',
         name: 'name',
         message: 'Input engineers name'
        },
        {
         type: 'input',
         name: 'id',
         message: 'Input engineers ID'
        },
        {
         type: 'input',
         name: 'email',
         message: 'Input engineers email'
        },
        {
         type: 'input',
         name: 'github',
         message: 'Input engineers github',
        },
    ])
        .then((engineerInput) => {
            const { name, id, email, github } = engineerInput;
            const engineer = new Engineer(name, id, email, github);
            teamArray.push(engineer);
            getEmployee();
        })
        .catch((err) => console.error(err));
}

const getIntern = () => {
    return inquirer.prompt([
        {
         type: 'input',
         name: 'name',
         message: 'Input interns name'
        },
        {
         type: 'input',
         name: 'id',
         message: 'Input interns employee ID'
        },
        {
         type: 'input',
         name: 'email',
         message: 'Input interns email'
        },
        {
         type: 'input',
         name: 'school',
         message: 'Input interns school',
        },
    ])
        .then((internInput) => {
            const { name, id, email, school } = internInput;
            const intern = new Intern(name, id, email, school);
            teamArray.push(intern);
            getEmployee();
        })
        .catch((err) => console.error(err));
}
getManager()