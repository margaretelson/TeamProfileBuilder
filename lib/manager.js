const employeePage = require("./employee.js")

class Manager{
    constructor(name, ID, email, managerNumber){
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.managerNumber = managerNumber;
        this.role = "Manager";
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
    getNumber(){
        return this.managerNumber;
    }
};

module.exports = Manager;

