const loginCtrl ={};



const UserModel= require('../models/Users');

loginCtrl.getLogin=(req, res) => res.send({ menssage: 'get exitoso' });

loginCtrl.verificarUser= async (req, res) => {
    const { correo, password} = req.body;

    const users = await UserModel.find({ correo: correo });
    
    if (!users.length) { 
        res.json({resultadoLogin:'false'});
    } else{
        
        if(correo===users[0].correo && password ===users[0].password){
            
            res.json({resultadoLogin:'true', id :users[0]._id});
        } else {
           
            res.json({resultadoLogin:'false'});
        }        
    }
};


module.exports=loginCtrl;