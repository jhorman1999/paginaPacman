const registoCtrl = {};


const UserModel = require('../models/Users');

registoCtrl.registrarUser = async (req, res) => {
    const { userName, correo, password, numberPhone } = req.body;
    /*console.log(userName,correo,password,numberPhone);*/

    const newUserModel = new UserModel({
        userName: userName,
        correo: correo,
        password: password,
        numberPhone: numberPhone,
        tipoDeUser: "jugador",
        estado: "desconectado"
    });
    const userAux = []
    const users = await UserModel.find({ correo: correo });
    
    if (!users.length) {      
        const resultado = await newUserModel.save();
        
        res.json({resultadoRegisto:'true'});
        
    } else{
        res.json({resultadoRegisto:'false'});
        
    }

};

registoCtrl.verUser = async (req, res) => {
    const users = await UserModel.find();
    res.send(users)
}

module.exports = registoCtrl;