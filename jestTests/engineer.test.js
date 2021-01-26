const Engineer = require("../lib/engineer.js");

describe("getRole", () => {
    // Positive test
    it("should return 'Engineer' from getRole()", () => {
      // Arrange
      const getRole = new Employee();
      // Assert
      expect(getRole).toEqual("Engineer");
    });
  });