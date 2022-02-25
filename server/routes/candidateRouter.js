const express = require('express');
const router = express.Router();
const { Candidate, Tag } = require('../db/models');

// /candidate

// Кандидат по id
router.get('/info/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const candidateInfo = await Candidate.findOne({ where: { id } });
    if (candidateInfo) {
      res.json({ candidateInfo });
    } else {
      res.sendStatus(500);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(503);
  }
});

// Все теги кандидата по id
router.get('/tags/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const tags = await Tag.findAll({
      // attributes: ['tag_name', 'color'],
      include: [
        {
          model: Candidate,
          where: { id }, //
        },
      ],
    });
    res.json(tags);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
