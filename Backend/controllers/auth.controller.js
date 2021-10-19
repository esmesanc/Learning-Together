const { pool } = require("../database/config");
const bcrypt = require("bcryptjs");
const { generateJWT } = require("../helpers/jwt");

const registro = async (req, res) => {
  try {
    pool.query(
      "SELECT * FROM usuario WHERE correo = ?",
      [req.body.correo],
      async (err, rows) => {
        if (rows.length > 0) {
          res.json({ text: "Usuario ya registrado" });
        } else {
          const email = req.body.email;
          const token = await generateJWT(email);
          const salt = bcrypt.genSaltSync();
          req.body.contrasena = bcrypt.hashSync(req.body.contrasena, salt);
          req.body.puntaje=0;
          pool.query("INSERT INTO usuario set ?", [req.body]);
          res.json({
            ok: true,
            text: "Registro correcto",
            email: email,
            token,
            data: req.body,
          });
        }
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      Text: "Algo salió mal",
    });
  }
};

const login = async (req, res) => {
  try {
    const correo = req.body.correo;
    const token = await generateJWT(correo);
    pool.query(
      "SELECT * FROM usuario WHERE correo = ?",
      [req.body.correo],
      async (err, rows) => {
        if (rows.length > 0) {
          bcrypt.compare(
            req.body.contrasena,
            rows[0].contrasena,
            function (err, ress) {
              if (err) {
                res.json({ ok: false, text: "" + err });
              }
              if (ress) {
                res.json({
                  ok: true,
                  text: "Login correcto",
                  correo: correo,
                  token,
                  data: {
                    nombre_usuario:rows[0].nombre_usuario,
                    correo:rows[0].correo,
                    puntaje:rows[0].puntaje
                  },
                });
              } else {
                res.json({
                  ok: false,
                  text: "Correo o contraseña incorrecta",
                });
              }
            }
          );
        } else {
          res.json({
            ok: false,
            text: "Correo o contraseña incorrecta",
          });
        }
      }
    );
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      text: "Algo salio mal",
    });
  }
};

const renuevaToken = async (req, res) => {
  const correo = req.body.correo;
  const token = await generateJWT(correo);
  return res.json({
    ok: true,
    text: "Validando token / Renovar token",
    correo: correo,
    token,
  });
};

module.exports = {
  renuevaToken,
  registro,
  login,
};
