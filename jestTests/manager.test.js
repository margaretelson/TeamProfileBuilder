const Manager = require("../lib/manager.js");

describe("getRole", () => {
    // Positive test
    it("should return 'Manager' from getRole()", () => {
      // Arrange
      const manager = new Manager("Sam", 43, "sam@gmail.com", 625);
      // Assert
      console.log(manager);
      expect(manager.getRole()).toEqual("Manager");
    });
});

describe("getName", () => {
    // Positive test
    it("should return 'Sam' from getName()", () => {
      // Arrange
      const manager = new Manager("Sam", 43, "sam@gmail.com", 625);
      // Assert
      console.log(manager);
      expect(manager.getName()).toEqual("Sam");
    });
});

describe("getID", () => {
    // Positive test
    it("should return 43 from getID()", () => {
      // Arrange
      const manager = new Manager("Sam", 43, "sam@gmail.com", 625);
      // Assert
      console.log(manager);
      expect(manager.getID()).toEqual(43);
    });
});

describe("getEmail", () => {
    // Positive test
    it("should return 'sam@gmail.com' from getEmail()", () => {
      // Arrange
      const manager = new Manager("Sam", 43, "sam@gmail.com", 625);
      // Assert
      console.log(manager);
      expect(manager.getEmail()).toEqual("sam@gmail.com");
    });
});

describe("getNumber", () => {
    // Positive test
    it("should return 625 from getNumber()", () => {
      // Arrange
      const manager = new Manager("Sam", 43, "sam@gmail.com", 625);
      // Assert
      console.log(manager);
      expect(manager.getNumber()).toEqual(625);
    });
});