const employeePage = require("./employee")

class Intern{
    constructor(name, ID, email, internSchool){
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.internSchool = internSchool;
        this.role = "Intern";
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
    getSchool(){
        return this.internSchool;
    }
};

module.exports = Intern;