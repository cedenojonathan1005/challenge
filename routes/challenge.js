
const { Router } = require('express');
const {challengeGet} = require('../controllers/challenge_controller')

const router = Router();


router.post('/', challengeGet );
module.exports = router;