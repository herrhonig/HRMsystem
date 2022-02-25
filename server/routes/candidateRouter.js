const express = require('express');
const router = express.Router();
const { Candidate } = require('../db/models');

// /candidate

router.get('/info/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const candidateInfo = await Candidate.findOne({ where: { id } });
    if (candidateInfo) {
      res.json({ candidateInfo });
    } else {
      res.status(500);
    }
  } catch (err) {
    console.log(err);
    res.status(503);
  }
});

module.exports = router;
