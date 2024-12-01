const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

// GET /user
router.get('/', controller.getUser);

module.exports = router;
