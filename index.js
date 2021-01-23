const inquirer = require('inquirer')
const fs = require('fs')
let newTeamProfile = []

var Manager = require("./lib/employee")


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

        const data = `
    <!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
        <link rel="stylesheet" href="style.css">
        <title>My Team</title>
        </head>
        <body>
            <nav class="navbar navbar-dark bg-dark">
                <span class="navbar-brand mb-0 h1 w-100 text-center">My Team</span>
                <p id="myTeam" class="lead"></p>
            </nav>

            <div class="card" style="width: 18rem;">
            <div class="card-header">Team Manager: ${response.name}</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Manager ID: ${response.ID}</li>
                    <li class="list-group-item">Manager Email: ${response.email}</li>
                    <li class="list-group-item">Manager Number${response.number}</li>
                </ul>
            </div>

    
    </body>
</html>
    `

    fs.writeFile('index.html', data, (error) => {

        error ? console.error(error) : console.log('success!')
});
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
        var engineerName = response.engineerName;
        var engineerID = response.engineerID;
        var engineerEmail = response.engineerEmail;
        var engineerGithub = response.engineerNumber
        const newTeamProfile = new Engineer(engineerName, engineerID, engineerEmail, engineerGithub);
        finalTeam.push(newTeamProfile);
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
        var internName = response.internName;
        var internID = response.internID;
        var internEmail = response.internEmail;
        var internSchool = response.internSchool
        const newTeamProfile = new Intern(internName, internID, internEmail, internSchool);
        finalTeam.push(newTeamProfile);
        teamMemPrompt();
    })
} 
    
    function teamMemPrompt(){
        inquirer.prompt([
            {
                type: 'list',
                name: 'addMore',
                message: 'Would you like to add another member to your team?',
                choices: ['Add another Engineer.', 'Add another Intern.', 'No, my team is complete.']
            },
        ]);
    }


    

managerPrompt();