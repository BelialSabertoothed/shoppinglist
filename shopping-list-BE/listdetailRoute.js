const express = require('express');
const router = express.Router();

// Obslužná funkce pro cestu '/user'
router.get('/list-detail', (req, res) => {
  res.send('Detail listu');
});

module.exports = router;