const inquirer = require('inquirer')
const fs = require('fs')


function managerPrompt(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: 'Who is the team manager?',
        },
        {
            type: 'input',
            name: 'managerID',
            message: 'What is the employee ID of the team manager?',
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is the team managers email?',
        },
        {
            type: 'input',
            name: 'managerNumber',
            message: 'What is the office number of the team manager?',
        },
    ]).then(function(response){
        var managerName = response.managerName;
        var managerID = response.managerID;
        var managerEmail = response.managerEmail;
        var managerNumber = response.managerNumber
        const newTeamProfile = new Manager(managerName, managerID, managerEmail, managerNumber);
        finalTeam.push(newTeamProfile);
        teamMemPrompt();
    })
}

function engineerPrompt(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: 'What is the name of the engineer you are inputting?',
        },
        {
            type: 'input',
            name: 'engineerID',
            message: 'What is the employee ID of the engineer?',
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: 'What is the engineers email?',
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: 'What is the Github username of the engineer?',
        },
    ]);
}    

function internPrompt(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the name of the intern you are inputting?',
        },
        {
            type: 'input',
            name: 'internID',
            message: 'What is the employee ID of the intern?',
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is the interns email?',
        },
        {
            type: 'input',
            name: 'internSchool',
            message: 'What school does the intern go to?',
        },
    ]); 
    
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
            <div class="card-header">Team Manager: ${response.managerName}</div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Manager ID: ${response.managerID}</li>
                    <li class="list-group-item">Manager Email: ${response.managerEmail}</li>
                    <li class="list-group-item">Manager Number${response.managerNumnber}</li>
                </ul>
            </div>

    
    </body>
</html>


    `
    fs.writeFile('index.html', data, (error) => {

        error ? console.error(error) : console.log('success!')
});