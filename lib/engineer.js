const employeePage = require("./employee.js")

class Engineer{
    constructor(name, ID, email, engineerGithub){
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.engineerGithub = engineerGithub;
        this.role = "Engineer";
    }
    getRole(){
        return this.role;
    }
    getName(){
        return this.name;
    }
    getID(){
        return this.ID;
    }
    getEmail(){
        return this.email;
    }
    getGithub(){
        return this.engineerGithub;
    }
};

module.exports = Engineer;