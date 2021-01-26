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
