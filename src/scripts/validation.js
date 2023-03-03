import {
    minSize,
    minUppercase,
    minLowercase,
    minDigit,
    minSpecialChars,
    noRepeted,
} from "./rules.js";

let conditional1;
let conditional2;
let conditional3;
let conditional4;
let conditional5;
let conditional6;

export const validation = (password, rules) => {
    for (let i = 0; i < rules.length; i++) {
        switch (rules[i].rule) {
            case "minSize":
                conditional1 = minSize(password, rules[i]);
                break;
            case "minUppercase":
                conditional2 = minUppercase(password, rules[i]);
                break;
            case "minLowercase":
                conditional3 = minLowercase(password, rules[i]);
                break;
            case "minDigit":
                conditional4 = minDigit(password, rules[i]);
                break;
            case "minSpecialChars":
                conditional5 = minSpecialChars(password, rules[i]);
                break;
            case "noRepeted":
                conditional6 = noRepeted(password, rules[i]);
                break;
        }
    }
    const afterCheck = new Array(
        conditional1,
        conditional2,
        conditional3,
        conditional4,
        conditional5,
        conditional6
    );

    const result = afterCheck.filter((item) => item != "ok" && item != null);

    return result;
};