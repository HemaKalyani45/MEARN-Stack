const express = require('express');
const router = express.Router();
// TODO: implement register, login (JWT)

router.post('/register', (req, res) => res.json({ ok: true }));
router.post('/login', (req, res) => res.json({ ok: true }));

module.exports = router;
