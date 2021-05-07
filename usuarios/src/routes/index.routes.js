const { Router } = require('express');
const router = Router();

const { login } = require('../controllers/index.controller');

router.get('/api/login', login)

module.exports = router;