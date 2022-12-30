const Intern = require("../lib/Intern");

test("Can create school.", () => {
    const testSchool = "School Name";
    const employeeFigure = new Intern("David", 1, "isthatsilva@gmail.com", testSchool);
    expect(employeeFigure.school).toBe(testSchool);
});

test("Testing officeNumber will return office number.", () => {
    const testSchool = "School Name";
    const employeeFigure = new Intern("David", 1, "isthatsilva@gmail.com", testSchool);
    expect(employeeFigure.getSchool()).toBe(testSchool);
});

test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeFigure = new Intern("David", 1, "isthatsilva@gmail.com", "School Name");
    expect(employeeFigure.getRole()).toBe(returnValue);
});