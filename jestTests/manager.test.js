const Manager = require("../lib/manager.js");

describe("getRole", () => {
    // Positive test
    it("should return 'Manager' from getRole()", () => {
      // Arrange
      const getRole = new Employee();
      // Assert
      expect(getRole).toEqual("Manager");
    });
  });