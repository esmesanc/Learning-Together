const { validationResult } = require("express-validator");

const validar =  (req, res, next) => {
    const errors = validationResult(req);
    if( !errors.isEmpty()){
        return res.status(400).json(
            {
                ok: false,
                text: errors.mapped()
            }
        )
    }
    next();
}

module.exports = {
    validar
}
