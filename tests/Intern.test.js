const Intern = require("../lib/Intern")

test("intern position", () => {
    const intern = new Intern ("Leilani", 5, 'leilani@hotmail.com');
    expect(intern.name).toEqual(expect.any(String));
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expecy.any(String));
    expect(intern.school).toEqual(expect.any(String));

});

test("get name", () => {
    const intern = new Intern ("Leilani", 5, 'leilani@hotmail.com');
    expect(intern.getName()).toEqual(expect.any(String));
});

test("get id", () => {
    const intern = new Intern ("Leilani", 5, 'leilani@hotmail.com');
    expect(intern.getId()).toEqual(expect.any(Number));
});

test("get email", () => {
    const intern = new Intern ("Leilani", 5, 'leilani@hotmail.com');
    expect(intern.getEmail()).toEqual(expect.any(String));
});

test("get role", () => {
    const intern = new Intern ("Leilani", 5, 'leilani@hotmail.com');
    expect(intern.getRole).toEqual("intern");
});

test("get school", () => {
    const intern = new Intern ("Leilani", 5, 'leilani@hotmail.com');
    expect(intern.getSchool()).toEqual(expect.any(String));
});