const express = require('express');
const router = express.Router();
const {
  Company,
} = require('../db/models');


router.get('/list', async (req, res) => {
  const { id } = req.params;
  try {
    const list = await Company.findAll();
    res.json(list);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

module.exports = router;
