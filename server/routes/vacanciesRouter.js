const express = require('express');
const router = express.Router();
const {
  Vacancy,
  Company,
  Priority,
  StatusVacancy,
  VacancyJoinTable,
} = require('../db/models');

// /vacancies
router.get('/list', async (req, res) => {
  const { id } = req.params;
  try {
    const list = await Vacancy.findAll();
    res.json(list);
  } catch (err) {
    // console.log(err);
    res.sendStatus(500);
  }
});

router.get('/:clientsid/list', async (req, res) => {
  const { clientsid } = req.params;
  try {
    // const list = await Candidate.findAll();

    const candidateVacancy = await Vacancy.findAll({
      include: [
        {
          model: Company,
          // required: true,
        },
      ],
      where: { company_id: clientsid },
      // raw: true
    });
    res.json(candidateVacancy);
  } catch (err) {
    // console.log(err);
    res.sendStatus(503);
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
    // console.log(err);
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
  // console.log(req.body);
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
    // console.log(err);
    res.sendStatus(500);
  }
});

router.get('/vacancy/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const vacancy = await Vacancy.findAll({ where: { id } });
    const company = await Company.findOne({
      where: { id: vacancy.company_id },
    });
    const status = await StatusVacancy.findOne({
      where: { id: vacancy.status_id },
    });
    const priority = await Priority.findOne({
      where: { id: vacancy.priority_id },
    });

    res.json({
      vacancy,
      compName: company.name,
      statusName: status.statusvac_name,
      priorName: priority.name,
    });
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.post('/candidate/company', async (req, res) => {
  const { vacancy_id, candidate_id, user_id } = req.body.value;
  try {
    VacancyJoinTable.create({
      vacancy_id,
      candidate_id,
      user_id,
      status_id: 1,
    });
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.get('/statuses', async (req, res) => {
  const statuses = await StatusVacancy.findAll();
  try {
    res.json(statuses);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

router.post('/statuses', async (req, res) => {
  console.log('11111111111111111111111111111111111111111111111',req.body.value);
  const { status_id, candidate_id, vacancy_id, user_id, statusId } =
    req.body.value;
  try {
    const vacJT = await VacancyJoinTable.findOne({
      where: { 
        // status_id,
         candidate_id,
         vacancy_id,
          user_id 
        },
    });
    console.log('222222222222222222222222222222222222222222222',vacJT);
    VacancyJoinTable.update(
      { status_id: statusId },
      { where: { id: vacJT.id } }
    );
    res.sendStatus(200);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
