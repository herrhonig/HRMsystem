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

router.post('/vacancy', async (req, res) => {
  const {
    position,
    company_id,
    money,
    priority_id,
    quantity,
    descr,
    requirements,
    conditions,
    status_id,
    deadline,
  } = req.body.value;
  console.log(req.body);
  try {
    const newVacancy = await Vacancy.create({
      position,
      company_id,
      money,
      priority_id,
      quantity,
      descr,
      requirements,
      conditions,
      status_id,
      deadline,
      hidden: false,
    });
    if (newVacancy) {
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
