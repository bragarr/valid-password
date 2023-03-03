export const dataBasePassword = {
    password: "TesteSenhaForte!123&",
    rules: [
        { rule: "minSize", value: 8 },
        { rule: "minSpecialChars", value: 2 },
        { rule: "noRepeted", value: 0 },
        { rule: "minDigit", value: 4 },
    ]
};

export const verifiedPassword = {
    verify: false,
    noMatch: ["minDigit", "noRepeted"]
}