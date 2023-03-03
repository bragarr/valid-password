import {
    minSize,
    minUppercase,
    minLowercase,
    minDigit,
    minSpecialChars,
    noRepeted
} from "../scripts/rules.js";

const conditionals = [];

export const passwordCheck = (password, rules) => {
    rules.forEach((element) => {
        conditionals.push([element.rule, element.value]);
    });

    for (let i = 0; i < conditionals.length; i++) {
        switch (conditionals[i][0]) {
            case "minSize":
                (minSize(password, conditionals[i]));
                break;
            case "minUppercase":
                (minUppercase(password, conditionals[i]));
                break;
            case "minLowercase":
                (minLowercase(password, conditionals[i]));
                break;
            case "minDigit":
                (minDigit(password, conditionals[i]));
                break;
            case "minSpecialChars":
                (minSpecialChars(password, conditionals[i]));
                break;
            case "noRepeted":
                (noRepeted(password, conditionals[i]));
                break;
        }
    }
};