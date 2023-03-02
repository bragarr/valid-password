import { passwordCheck } from "../src/scripts/passwordCheck.js";

export const response = (_, res) => {
    return res.status(200).json("There is no data to show");
};

export const verifyPassword = (req, res) => {
    const toVerify = {
        password: req.body.password,
        rules: req.body.rules
    };
    const noMatch = passwordCheck(toVerify.password, toVerify.rules);

    const verify = noMatch.length > 0 ? false : true;

    const result = {
        verify: verify,
        noMatch: noMatch
    }
    
    return res.status(200).json(result);
};
