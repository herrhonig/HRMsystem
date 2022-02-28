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

router.post('/info', async (req, res) => {
  const {
    last_name,
    first_name,
    middle_name,
    phone,
    email,
    position,
    company,
    money,
    birthday_day,
    birthday_month,
    birthday_year,
    photo,
    desc,
  } = req.body.value;
  const birthday = `${birthday_day}.${birthday_month}.${birthday_year}`;

  try {
    const newId = await Candidate.create({
      last_name,
      first_name,
      middle_name,
      phone,
      email,
      position,
      company,
      money,
      birthday_day,
      birthday_month,
      birthday_year,
      photo,
      birthday,
    });
    const newDesc = await AboutCandidate.create({
      candidate_id: newId.id,
      descr: desc,
    });
    if (newId && newDesc) {
      res.json({ newId });
    } else {
      res.sendStatus(500);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.post('/exp', async (req, res) => {
  console.log(req.body);
  console.log(req.body.id);
  const { id } = req.body;
  const { company_name, position, start_date, end_date, descr } =
    req.body.experiences;

  try {
    const newExp = await Experience.create({
      candidate_id: id,
      company_name,
      position,
      descr,
      start_date,
      end_date,
    });
    console.log(newExp);
    if (newExp) {
      res.sendStatus(200);
    } else {
      res.sendStatus(500);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
