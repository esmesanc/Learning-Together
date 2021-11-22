const jwt = require('jsonwebtoken');
require('dotenv').config();

const valitarJWT = (req, res, next) => {
    const token = req.header('authorization');

    console.log(token);

    if(!token) {
        return res.status(401).json({
            ok: false,
            msg: 'Token error'
        });
    }

    try {
        var tokenAux = token.replace("Bearer ","");//Verificar esto...
        var decoded = jwt.verify(tokenAux, process.env.SECRET_KEY);
        console.log(decoded);
    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token no valido'
        });
    }

    // Todo bien, todo correcto
    next();
}

module.exports = {
    valitarJWT
}
