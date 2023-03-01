export const response = (_, res) => {
    return res.status(200).json("There is no data to show");
};

export const verifyPassword = (req, res) => {
    const toVerify = {
        password: req.body.password,
        rules: req.body.rules,
    };
    return res.status(200).json(toVerify);
};
