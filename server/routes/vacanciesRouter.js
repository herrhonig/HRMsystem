const express = require('express');
const router = express.Router();
const { Vacancy, Company, Priority, StatusVacancy } = require('../db/models');

// /vacancies
router.get('/list', async (req, res) => {
  const { id } = req.params;
  try {
    const list = await Vacancy.findAll();
    res.json(list);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get('/data', async (req, res) => {
  try {
    const companies = await Company.findAll();
    const statuses = await StatusVacancy.findAll();
    const priorities = await Priority.findAll();
    if (companies && statuses && priorities) {
      res.json({ companies, statuses, priorities });
    } else {
      res.sendStatus(500);
    }
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
