const express = require('express');
const router = express.Router();

const questions = require('../questions');

router.get('/questions', function(req, res, next) {
  res.json(JSON.stringify({questions}));
});

module.exports = router;