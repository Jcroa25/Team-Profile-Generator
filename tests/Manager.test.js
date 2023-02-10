const Manager = require("../lib/Manager")

test("Manager position", () => {
    const manager = new Manager ("Aylisa", 28, 'Aylisa@hotmail.com', 123);
    expect(manager.name).toEqual(expect.any(String));
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(String));
    expect(manager.officeNum).toEqual(expect.any(Number));

});

test("get name", () => {
    const manager = new Manager ("Aylisa", 28, 'Aylisa@hotmail.com', 123);
    expect(manager.getName()).toEqual(expect.any(String));
});

test("get id", () => {
    const manager = new Manager ("Aylisa", 28, 'Aylisa@hotmail.com', 123);
    expect(manager.getId()).toEqual(expect.any(Number));
});

test("get email", () => {
    const manager = new Manager ("Aylisa", 28, 'Aylisa@hotmail.com', 123);
    expect(manager.getEmail()).toEqual(expect.any(String));
});

test("get role", () => {
    const manager = new Manager ("Aylisa", 28, 'Aylisa@hotmail.com', 123);
    expect(manager.getRole()).toEqual("Manager");
});

test("get number", () => {
    const manager = new Manager ("Aylisa", 28, 'Aylisa@hotmail.com', 123);
    expect(manager.officeNum).toEqual(expect.any(Number));
});