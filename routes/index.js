const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const seqeulize = require('sequelize');
const Item = require('../models/Account');

router.get('/',(req, res) => {
    res.render('index');
});

router.get('/account', (req, res) => {
    res.render('account');
});

router.post('/', (req , res) => {
    res.render('index');
})


module.exports = router;