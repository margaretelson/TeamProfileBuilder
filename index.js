const inquirer = require('inquirer')
const fs = require('fs')

let newTeamProfile = []

function createApp(){
    teamMemPrompt()
}


// var Employee = require("./lib/employee.js")
var Manager = require("./lib/manager.js")
var Engineer = require("./lib/engineer.js")
var Intern = require("./lib/intern.js")


function managerPrompt(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Who is the team manager?',
        },
        {
            type: 'input',
            name: 'ID',
            message: 'What is the employee ID of the team manager?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the team managers email?',
        },
        {
            type: 'input',
            name: 'managerNumber',
            message: 'What is the office number of the team manager?',
        },
    ]).then(function(response){
        var name = response.name;
        var ID = response.ID;
        var email = response.email;
        var managerNumber = response.managerNumber
        const newTeamMem = new Manager(name, ID, email, managerNumber);
        newTeamProfile.push(newTeamMem);
        teamMemPrompt();  
    })
}

function engineerPrompt(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer you are inputting?',
        },
        {
            type: 'input',
            name: 'ID',
            message: 'What is the employee ID of the engineer?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineers email?',
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the Github username of the engineer?',
        },
    ]).then(function(response){
        var name = response.name;
        var ID = response.ID;
        var email = response.email;
        var engineerGithub = response.engineerGithub;
        const newTeamMem = new Engineer(name, ID, email, engineerGithub);
        newTeamProfile.push(newTeamMem);
        teamMemPrompt();
    })
}    

function internPrompt(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern you are inputting?',
        },
        {
            type: 'input',
            name: 'ID',
            message: 'What is the employee ID of the intern?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the interns email?',
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What school does the intern go to?',
        },
    ]).then(function(response){
        var name = response.name;
        var ID = response.ID;
        var email = response.email;
        var internSchool = response.internSchool
        const newTeamMem = new Intern(name, ID, email, internSchool);
        newTeamProfile.push(newTeamMem);
        teamMemPrompt();
    })
} 
    
    function teamMemPrompt(){
        inquirer.prompt([
            {
                type: 'list',
                name: 'addMore',
                message: 'Would you like to add a member to your team?',
                choices: ['Add an Engineer.', 'Add an Intern.', 'Add a Manager.', 'No, my team is complete.']
            },
        ])
        .then(function (response) {

            switch (response.addMore) {
                case "Add an Engineer.":
                    engineerPrompt();
                    break;

                case "Add an Intern.":
                    internPrompt();
                    break;

                case "Add a Manager.":
                    managerPrompt();
                    break;

                case "No, my team is complete.":
                    completeTeam();
                    break;
            }
        });
    }

function completeTeam() {
    console.log("Congratulations! You have a team.")
    
    beginHTML()
    inputHTML();
    endHTML();
}
    
function beginHTML(){
    const data = `
    <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <link rel="stylesheet" href="./dist/style.css">
        <title>My Team</title>
        </head>
        <body>
            <nav class="navbar navbar-dark bg-dark">
                <span class="navbar-brand mb-0 h1 w-100 text-center">My Team</span>
                <p id="myTeam" class="lead"></p>
            </nav>
            <div class="row">
            `
    fs.writeFile('index.html', data, (error) => {
        error ? console.error(error) : console.log('success!')
});
}

function inputHTML(){
    let data = ""
    newTeamProfile.forEach(function(employee){
        if (employee.getRole() === "Manager"){
            data +=
            `<div class="card" style="width: 18rem;">
            <div class="card-header" id="topBar">Manager</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" id="name">${employee.name}</li>
                    <li class="list-group-item">ID: ${employee.ID}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item">Office Number: ${employee.managerNumber}</li>
                </ul>
            </div>`
        } else if (employee.getRole() === "Engineer"){
            data +=
            `<div class="card" style="width: 18rem;">
            <div class="card-header" id="topBar">Engineer</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" id="name">${employee.name}</li>
                    <li class="list-group-item">ID: ${employee.ID}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item"><a href="https://github.com/${employee.engineerGithub}">https://github.com/${employee.engineerGithub}</a></li>
                </ul>
            </div>`
        } else {
            data +=
            `<div class="card" style="width: 18rem;">
            <div class="card-header" id="topBar">Intern</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item" id="name">${employee.name}</li>
                    <li class="list-group-item">ID: ${employee.ID}</li>
                    <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
                    <li class="list-group-item">School: ${employee.internSchool}</li>
                </ul>
            </div>`
        }
    })
    // return new Promise (function(response){
    //     var name = response.name;
    //     var ID = response.ID;
    //     var email = response.email;
    //     let data = "";
        
        fs.appendFile("index.html", data, function (error) {
            error ? console.error(error) : console.log('success!')
        })
}

function endHTML(){
    data = 
    `</div>
    </body>
    </html>
        `
    fs.appendFile("index.html", data, function (error) {
        error ? console.error(error) : console.log('success!')
    });
}
createApp();