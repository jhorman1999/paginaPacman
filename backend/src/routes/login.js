const { Router } = require('express');

const router = Router();

const {getLogin,verificarUser}= require('../controllers/login.controllers');

router.route('/')
    .get(getLogin)
    .post(verificarUser);


module.exports = router;