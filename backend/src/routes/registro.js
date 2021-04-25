const { Router } = require('express');

const router = Router();

const {registrarUser,verUser}= require('../controllers/registro.controllers');


router.route('/registro')
    .get(verUser)
    .post(registrarUser);

module.exports = router;