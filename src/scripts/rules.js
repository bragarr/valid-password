const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabetUpperCase = alpha.map((x) => String.fromCharCode(x));
const alphabetLowerCase = alphabetUpperCase.map((item) => item.toLowerCase());
const symbols = "!@#$%^&*()-+/{}[]".split("");
const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let numberOfUpperCase = 0;
let numberOfLowerCase = 0;
let numberOfSpecialCars = 0;
let numberOfDigits = 0;
let repeatedCars = false;

export const minSize = (password, conditional) => {
    if (password.length < conditional[1]) {
        return conditional[0];
    } else {
        console.log("ok")
    }
};

export const minUppercase = (password, conditional) => {
    for (let i = 0; i < password.length; i++) {
        if (alphabetUpperCase.includes(password[i])) {
            numberOfUpperCase += 1;
        }
    }
    if (numberOfUpperCase < conditional[1]) {
        return conditional[0];
    } else {
        console.log("ok")
    }
};

export const minLowercase = (password, conditional) => {
    for (let i = 0; i < password.length; i++) {
        if (alphabetLowerCase.includes(password[i])) {
            numberOfLowerCase += 1;
        }
    }
    if (numberOfLowerCase < conditional[1]) {
        return conditional[0];
    } else {
        console.log("ok")
    }
};

export const minDigit = (password, conditional) => {
    for (let i = 0; i < password.length; i++) {
        if (digits.includes(password[i])) {
            numberOfDigits += 1;
        }
    }
    if (numberOfDigits < conditional[1]) {
        return conditional[0];
    } else {
        console.log("ok")
    }
};

export const minSpecialChars = (password, conditional) => {
    for (let i = 0; i < password.length; i++) {
        if (symbols.includes(password[i])) {
            numberOfSpecialCars += 1;
        }
    }
    if (numberOfSpecialCars < conditional[1]) {
        return conditional[0];
    } else {
        console.log("ok")
    }
};

export const noRepeted = (password, conditional) => {
    for (let i = 0; i < password.length; i++) {
        const count = password.split(password[i]);
        if (count.length > 2) {
            repeatedCars = true;
        }
    }
    if (repeatedCars) {
        return conditional[0];
    } else {
        console.log("ok")
    }
};
