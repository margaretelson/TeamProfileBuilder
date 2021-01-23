class Employee {
    constructor(name, ID, email){
        this.name = name;
        this.ID = ID;
        this.email = email;
        this.role = "Employee";
    }
    getRole(){
        return this.title;
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
};

module.exports = Employee;