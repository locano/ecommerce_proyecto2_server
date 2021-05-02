const { Router } = require('express');
const router = Router();

const { login } = require('../controllers/index.controller');

router.get('/usuarios', login)

module.exports = router;