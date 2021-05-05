const { Router } = require('express');

const router = Router();

const {getLogin,verificarUser,conectarDesconectarUser}= require('../controllers/login.controllers');

router.route('/')
    .get(getLogin)
    .patch(conectarDesconectarUser)
    .post(verificarUser);


module.exports = router;