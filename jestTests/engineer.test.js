const Engineer = require("../lib/engineer.js");

describe("getRole", () => {
    // Positive test
    it("should return 'Engineer' from getRole()", () => {
      // Arrange
      const engineer = new Engineer("Sam", 43, "sam@gmail.com", "samsmith");
      // Assert
      console.log(engineer);
      expect(engineer.getRole()).toEqual("Engineer");
    });
  });

  describe("getName", () => {
    // Positive test
    it("should return 'Sam' from getName()", () => {
      // Arrange
      const engineer = new Engineer("Sam", 43, "sam@gmail.com", "samsmith");
      // Assert
      console.log(engineer);
      expect(engineer.getName()).toEqual("Sam");
    });
});

describe("getID", () => {
    // Positive test
    it("should return 43 from getID()", () => {
      // Arrange
      const engineer = new Engineer("Sam", 43, "sam@gmail.com", "samsmith");
      // Assert
      console.log(engineer);
      expect(engineer.getID()).toEqual(43);
    });
});

describe("getEmail", () => {
    // Positive test
    it("should return 'sam@gmail.com' from getEmail()", () => {
      // Arrange
      const engineer = new Engineer("Sam", 43, "sam@gmail.com", "samsmith");
      // Assert
      console.log(engineer);
      expect(engineer.getEmail()).toEqual("sam@gmail.com");
    });
});

describe("getGithub", () => {
    // Positive test
    it("should return 'samsmith' from getGithub()", () => {
      // Arrange
      const engineer = new Engineer("Sam", 43, "sam@gmail.com", "samsmith");
      // Assert
      console.log(engineer);
      expect(engineer.getGithub()).toEqual("samsmith");
    });
});