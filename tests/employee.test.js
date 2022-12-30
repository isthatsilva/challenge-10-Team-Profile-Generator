const Employee = require("../lib/Employee");

test("Can create an new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing name.", () => {
    const name = "David";
    const employeeFigure = new Employee(name);
    expect(employeeFigure.name).toBe(name);
})

test("Testing ID.", () => {
    const id = 1;
    const employeeFigure = new Employee("David", id);
    expect(employeeFigure.id).toBe(id);
})

test("Testing email.", () => {
    const email = "isthatsilva@gmail.com";
    const employeeFigure = new Employee("David", 1, email);
    expect(employeeFigure.email).toBe(email);
})



test("Gets name through getName method.", () => {
    const testName = "David";
    const employeeFigure = new Employee(testName);
    expect(employeeFigure.getName()).toBe(testName);
})

test("Can test ID through getID method.", () => {
    const testID = 1;
    const employeeFigure = new Employee("David", testID);
    expect(employeeFigure.getId()).toBe(testID);
})

test("Can test email through getEmail method.", () => {
    const testEmail = "isthatsilva@gmail.com";
    const employeeFigure = new Employee("David", 1, testEmail);
    expect(employeeFigure.getEmail()).toBe(testEmail);
})

test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeFigure = new Employee("David", 1, "isthatsilva@gmail.com");
    expect(employeeFigure.getRole()).toBe(returnValue);
})