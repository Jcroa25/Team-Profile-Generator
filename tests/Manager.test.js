const Employee = require("../lib/Employee")

test("Employee position", () => {
    const employee = new Employee ("JuanCarlos", 28, 'juancarlos@hotmail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expecy.any(String));

});

test("get name", () => {
    const employee = new Employee ("JuanCarlos", 28, 'juancarlos@hotmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

test("get id", () => {
    const employee = new Employee ("JuanCarlos", 28, 'juancarlos@hotmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

test("get email", () => {
    const employee = new Employee ("JuanCarlos", 28, 'juancarlos@hotmail.com');
    expect(employee.getEmail()).toEqual(expect.any(String));
});

test("get role", () => {
    const employee = new Employee ("JuanCarlos", 28, 'juancarlos@hotmail.com');
    expect(employee.getRole).toEqual("Employee");
});