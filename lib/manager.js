const Employee = require("./employee.js")

class Manager extends Employee{
    constructor(name, ID, email, managerNumber){
        super(name, ID, email, "Manager")
        this.managerNumber = managerNumber;
    }
    getNumber(){
        return this.managerNumber;
    }
};

module.exports = Manager;

