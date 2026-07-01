const express = require('express');
const router = express.Router();
// TODO: implement CRUD for jobs, search & filter

router.get('/', (req, res) => res.json({ jobs: [] }));
router.post('/', (req, res) => res.json({ ok: true }));

module.exports = router;
