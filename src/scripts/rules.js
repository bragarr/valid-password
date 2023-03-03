const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabetUpperCase = alpha.map((x) => String.fromCharCode(x));
const alphabetLowerCase = alphabetUpperCase.map((item) => item.toLowerCase());
const symbols = "!@#$%^&*()-+/{}[]".split("");
const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

export const minSize = (password, conditional) => {
    if (password.length < conditional.value) {
        return (conditional.rule);
    } else {
        return "ok"
    }
};

export const minUppercase = (password, conditional) => {
    let numberOfUpperCase = 0;
    for (let i = 0; i < password.length; i++) {
        if (alphabetUpperCase.includes(password[i])) {
            numberOfUpperCase += 1;
        }
    }
    if (numberOfUpperCase < conditional.value) {
        return (conditional.rule);
    } else {
        return "ok"
    }
};

export const minLowercase = (password, conditional) => {
    let numberOfLowerCase = 0;
    for (let i = 0; i < password.length; i++) {
        if (alphabetLowerCase.includes(password[i])) {
            numberOfLowerCase += 1;
        }
    }
    if (numberOfLowerCase < conditional.value) {
        return (conditional.rule);
    } else {
        return "ok"
    }
};

export const minDigit = (password, conditional) => {
    let numberOfDigits = 0;
    for (let i = 0; i < password.length; i++) {
        if (digits.includes(password[i])) {
            numberOfDigits += 1;
        }
    }
    if (numberOfDigits < conditional.value) {
        return (conditional.rule);
    } else {
        return "ok"
    }
};

export const minSpecialChars = (password, conditional) => {
    let numberOfSpecialCars = 0;
    for (let i = 0; i < password.length; i++) {
        if (symbols.includes(password[i])) {
            numberOfSpecialCars += 1;
        }
    }
    if (numberOfSpecialCars < conditional.value) {
        return (conditional.rule);
    } else {
        return "ok"
    }
};

export const noRepeted = (password, conditional) => {
    let repeatedCars = false;
    for (let i = 0; i < password.length; i++) {
        const count = password.split(password[i]);
        if (count.length > 2) {
            repeatedCars = true;
        }
    }
    if (repeatedCars==true) {
        return (conditional.rule);
    } else {
        return "ok"
    }
};