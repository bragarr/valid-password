import { Validation } from "./validation.js";

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabetUpperCase = alpha.map((x) => String.fromCharCode(x));
const alphabetLowerCase = alphabetUpperCase.map((item) => item.toLowerCase());
const symbols = ("!@#$%^&*()-+\/{}[]").split("");
const digits = ["0","1","2","3","4","5","6","7","8","9"];

export const passwordCheck = (password, rules) => {
    const noMatch = [];
    let numberOfUpperCase = 0;
    let numberOfLowerCase = 0;
    let numberOfSpecialCars = 0;
    let numberOfDigits = 0;
    let repeatedCars = false;

    for(let i = 0; i < password.length; i++) {
        if(alphabetUpperCase.includes(password[i])) {
            numberOfUpperCase += 1;
        }
        if(alphabetLowerCase.includes(password[i])) {
            numberOfLowerCase += 1;
        }
        if(symbols.includes(password[i])) {
            numberOfSpecialCars += 1;
        }
        if(digits.includes(password[i])) {
            numberOfDigits += 1;
        }
    }

    for(let i = 0; i < password.length; i++) {
        const count = password.split(password[i]);
        if(count.length > 2) {
            repeatedCars = true
        }
    }

    console.log(rules);

    const isPasswordSizeOk = password.length < 8 ? noMatch.push("minSize") : "Size Ok";
    const isPasswordUpperCaseOk = numberOfUpperCase < 1 ? noMatch.push("minUppercase") : "Uppercase ok";
    const isPasswordLowerCaseOk = numberOfLowerCase < 1 ? noMatch.push("minLowercase") : "Lowercase ok";
    const isPasswordSymbolsOk = numberOfSpecialCars < 2 ? noMatch.push("minSpecialChars") : "SpecialCars ok";
    const isDigitsOk = numberOfDigits < 4 ? noMatch.push("minDigit") : "Digits ok";
    const isRepeatedCars = repeatedCars ? noMatch.push("noRepeted") : "No repeated ok";
    
    return noMatch;
}