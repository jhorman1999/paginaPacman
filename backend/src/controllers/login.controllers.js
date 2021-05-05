const loginCtrl = {};

const jwt = require('jsonwebtoken');



const UserModel = require('../models/Users');

loginCtrl.getLogin = (req, res) => res.send({ menssage: 'get exitoso' });

loginCtrl.verificarUser = async (req, res) => {
    const { correo, password } = req.body;

    const users = await UserModel.find({ correo: correo });

    if (!users.length) {
        res.json({ resultadoLogin: 'false' });
    } else {

        if (correo === users[0].correo && password === users[0].password) {
            /// gernerar token
            const payload = {
                correo: users[0].correo,
            };
            const token = jwt.sign(payload, "llaveUltrasecreta", {
                expiresIn: 1440
            });
            console.log(token);
            console.log({ resultadoLogin: 'true', id: users[0]._id, tipoDeUser: users[0].tipoDeUser });
            res.json({ resultadoLogin: 'true', id: users[0]._id, tipoDeUser: users[0].tipoDeUser });

            

        } else {

            res.json({ resultadoLogin: 'false' });
        }
    }

   
};
loginCtrl.conectarDesconectarUser = async (req, res) => {
    const { correo, estado } = req.body;
    const users = await UserModel.findOneAndUpdate({ correo: correo },{estado:estado});
    
    res.json({ users });
};

module.exports = loginCtrl;