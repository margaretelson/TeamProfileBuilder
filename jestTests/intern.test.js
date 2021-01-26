const Intern = require("../lib/intern.js");

describe("getRole", () => {
    // Positive test
    it("should return 'Intern' from getRole()", () => {
      // Arrange
      const intern = new Intern("Sam", 43, "sam@gmail.com", "Columbia");
      // Assert
      console.log(intern);
      expect(intern.getRole()).toEqual("Intern");
    });
});

describe("getName", () => {
    // Positive test
    it("should return 'Intern' from getRole()", () => {
      // Arrange
      const intern = new Intern("Sam", 43, "sam@gmail.com", "Columbia");
      // Assert
      console.log(intern);
      expect(intern.getName()).toEqual("Sam");
    });
});

describe("getID", () => {
    // Positive test
    it("should return 'Intern' from getRole()", () => {
      // Arrange
      const intern = new Intern("Sam", 43, "sam@gmail.com", "Columbia");
      // Assert
      console.log(intern);
      expect(intern.getID()).toEqual(43);
    });
});

describe("getEmail", () => {
    // Positive test
    it("should return 'Intern' from getRole()", () => {
      // Arrange
      const intern = new Intern("Sam", 43, "sam@gmail.com", "Columbia");
      // Assert
      console.log(intern);
      expect(intern.getEmail()).toEqual("sam@gmail.com");
    });
});

describe("getSchool", () => {
    // Positive test
    it("should return 'Intern' from getRole()", () => {
      // Arrange
      const intern = new Intern("Sam", 43, "sam@gmail.com", "Columbia");
      // Assert
      console.log(intern);
      expect(intern.getSchool()).toEqual("Columbia");
    });
});
