"use strict"
let router = require('express').Router();
let Controller = rootRequire('app/controllers/editionController');


router.get('/editions.ejs', Controller.index.get);
router.get('/editions', Controller.index.get);


module.exports = router;
