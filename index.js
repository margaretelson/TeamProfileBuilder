const inquirer = require('inquirer')
const fs = require('fs')

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'Here is ya question',

]).then((response) => {
    console.log(response)

    const data = `


    `
    fs.writeFile('index.html', data, (error) => {

        error ? console.error(error) : console.log('success!')
    })
})