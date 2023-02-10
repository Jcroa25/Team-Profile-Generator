const Engineer = require("../lib/Engineer")

test("Engineer position", () => {
    const engineer = new Engineer ("Aylisa", 28, 'Aylisa@hotmail.com', 'username');
    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
    expect(engineer.github).toEqual(expect.any(String));

});

test("get name", () => {
    const engineer = new Engineer ("Aylisa", 28, 'Aylisa@hotmail.com', 'username');
    expect(engineer.getName()).toEqual(expect.any(String));
});

test("get id", () => {
    const engineer = new Engineer ("Aylisa", 28, 'Aylisa@hotmail.com', 'username');
    expect(engineer.getId()).toEqual(expect.any(Number));
});

test("get email", () => {
    const engineer = new Engineer ("Aylisa", 28, 'Aylisa@hotmail.com', 'username');
    expect(engineer.getEmail()).toEqual(expect.any(String));
});

test("get role", () => {
    const engineer = new Engineer ("Aylisa", 28, 'Aylisa@hotmail.com', 'username');
    expect(engineer.getRole()).toEqual("Engineer");
});

test("get github", () => {
    const engineer = new Engineer ("Aylisa", 28, 'Aylisa@hotmail.com', 'username');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});