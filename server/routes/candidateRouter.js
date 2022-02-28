const express = require('express');
const router = express.Router();
const {
  Candidate,
  Tag,
  Education,
  Experience,
  AboutCandidate,
} = require('../db/models');

// /candidate

// Кандидат по id
router.get('/info/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const candidateInfo = await Candidate.findOne({ where: { id } });
    const candidateAbout = await AboutCandidate.findAll({
      where: { candidate_id: id },
    });
    const candidateExperience = await Experience.findAll({
      where: { candidate_id: id },
    });
    const candidateEducation = await Education.findAll({
      where: { candidate_id: id },
    });
    if (candidateInfo) {
      res.json({
        candidateInfo,
      });
    } else {
      res.sendStatus(500);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(503);
  }
});

router.get('/about/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const candidateAbout = await AboutCandidate.findAll({
      where: { candidate_id: id },
    });
    const candidateExperience = await Experience.findAll({
      where: { candidate_id: id },
    });
    const candidateEducation = await Education.findAll({
      where: { candidate_id: id },
    });
    res.json({ candidateAbout, candidateExperience, candidateEducation });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
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


router.get('/list', async (req, res) => {
  const { id } = req.params;
  try {
    const list = await Candidate.findAll();
    res.json(list);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
