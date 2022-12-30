const Manager = require('../lib/Manager');
  
test('creates an Manager object', () => {
    const manager = new Manager('David', 2, 'isthatsilva@gmail.com', 1);
    
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('gets role of employee', () => {
    const manager = new Manager('David', 1, 'isthatsilva@gmail.com', 1);

    expect(manager.getRole()).toEqual("Manager");
});