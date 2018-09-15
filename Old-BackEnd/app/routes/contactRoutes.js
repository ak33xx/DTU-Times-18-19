"use strict"

let router = require('express').Router();
let Controller = rootRequire('app/controllers/contactController');
router.get('/dtu%20contact.ejs/', Controller.index.get);
router.get('/dtu%20contact', Controller.index.get);
module.exports=router;
