
const { Router } = require('express');
const {challengeGet} = require('../controllers/challenge_controller')
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();


router.post('/',[
    check('from', 'La fecha inicial "from" es obligatoria').not().isEmpty(),
    check('to', 'La fecha final "to" es obligatoria').not().isEmpty(),
    validarCampos
], challengeGet );
module.exports = router;