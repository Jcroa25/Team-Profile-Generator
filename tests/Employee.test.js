const Employee = require("../lib/Employee")

test("Employee position", () => {
    const employee = new Employee ("Aylisa", 28, 'Aylisa@hotmail.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});
test("get name", () => {
    const employee = new Employee ("Aylisa", 28, 'Aylisa@hotmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});
test("get id", () => {
    const employee = new Employee ("Aylisa", 28, 'Aylisa@hotmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});
test("get email", () => {
    const employee = new Employee ("Aylisa", 28, 'Aylisa@hotmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});
test("get role", () => {
    const employee = new Employee ("Aylisa", 28, 'Aylisa@hotmail.com');
    expect(employee.getRole()).toEqual("Employee");
});