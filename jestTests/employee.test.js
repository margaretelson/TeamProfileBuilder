const Employee = require("../lib/employee.js");

describe("getRole", () => {
    // Positive test
    it("should return 'Employee' from getRole()", () => {
      // Arrange
      const employeeValue = "Employee"
      const employee = new Employee("Sam", 43, "sam@gmail.com", "Employee");
      // Assert
      expect(employee.getRole()).toEqual(employeeValue);
    });
  });

  describe("getName", () => {
    // Positive test
    it("should return 'Sam' from getName()", () => {
      // Arrange
      const employee = new Employee("Sam", 43, "sam@gmail.com");
      // Assert
      console.log(employee);
      expect(employee.getName()).toEqual("Sam");
    });
});

describe("getID", () => {
    // Positive test
    it("should return 43 from getID()", () => {
      // Arrange
      const employee = new Employee("Sam", 43, "sam@gmail.com");
      // Assert
      console.log(employee);
      expect(employee.getID()).toEqual(43);
    });
});

describe("getEmail", () => {
    // Positive test
    it("should return 'sam@gmail.com' from getEmail()", () => {
      // Arrange
      const employee = new Employee("Sam", 43, "sam@gmail.com");
      // Assert
      console.log(employee);
      expect(employee.getEmail()).toEqual("sam@gmail.com");
    });
});

describe("Employee.js", ()=> {
    it("Inputs name using the instructor",() => {
        const employee = new Employee("Sam", 43, "sam@gmail.com")
        expect(employee.getName()).toEqual("Sam");
    });

    it("Inputs ID using the instructor",() => {
        const employee = new Employee("Sam", 43, "sam@gmail.com")
        expect(employee.getID()).toEqual(43);
    });

    it("Inputs email using the instructor",() => {
        const employee = new Employee("Sam", 43, "sam@gmail.com")
        expect(employee.getEmail()).toEqual("sam@gmail.com");
    });
});

