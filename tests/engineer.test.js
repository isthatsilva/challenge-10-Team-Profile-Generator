const Engineer = require("../lib/Engineer");

test("Can create a github.", () => {
    const testGithub = "isthatsilva";
    const employeeFigure = new Engineer("David", 1, "isthatsilva@gmail.com", testGithub);
    expect(employeeFigure.github).toBe(testGithub);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "isthatsilva";
    const employeeFigure= new Engineer("David", 1, "isthatsilva@gmail.com", testGithub);
    expect(employeeFigure.getGithub()).toBe(testGithub);
});

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeFigure = new Engineer("David", 1, "Tisthatsilva@gmail.com", "isthatsilva");
    expect(employeeFigure.getRole()).toBe(returnValue);
});