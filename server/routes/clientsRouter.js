const express = require('express');
const router = express.Router();
const {
  Company,
} = require('../db/models');
const Sequelize = require('sequelize')
const Op = Sequelize.Op


router.get('/search', async (req, res) => {
  const { id } = req.params;
  let { query } = req.query
  query = query.toLowerCase();
  const page = parseInt(req.query.page)
  const limit = parseInt(req.query.limit)
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit
  try {
    const list = await Company.findAll({ where: { name: { [Op.iLike]: '%' + query + '%' } } });
    const results = {}
    if (endIndex < await list.length) {
      results.next = {
        page: page + 1,
        limit: limit
      }
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit
      }
    }
    results.results = list.slice(startIndex, endIndex)
    res.json(results);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
});

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
