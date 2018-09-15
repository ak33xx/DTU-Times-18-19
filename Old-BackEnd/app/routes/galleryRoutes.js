"use strict"
let router = require('express').Router();
let Controller = rootRequire('app/controllers/galleryController');
let Controller2 = rootRequire('app/controllers/photo_postController');
router.get('/gallery', Controller.index.get);
router.get('/gallery.ejs/', Controller.index.get);
// router.get('/gallery/:category/', Controller.category.get);
// router.get('/gallery%20engifest%20suni%20spandhan.ejs/', Controller.index.get);
// router.get('/gallery%20fest.ejs/', Controller.index.get);
// router.get('/gallery%20fest%20aahvan.ejs/', Controller.index.get);
// router.get('/gallery%20fest%20engifest.ejs/', Controller.index.get);
// router.get('/gallery%20fest ted.ejs/', Controller.index.get);
// router.get('/gallery%20fest%20yuvan.ejs/', Controller.index.get);
// router.get('/gallery%20fodtu.ejs/', Controller.index.get);
// router.get('/gallery%20godtu.ejs', Controller.index.get);
// router.get('/gallery%20codtu.ejs', Controller.index.get);
// router.get('/gallery%20recent.ejs', Controller.index.get);
// router.get('/gallery%20sodtu.ejs', Controller.index.get);
// router.get('/gallery%20engifest%20lagori.ejs', Controller.index.get);
// router.get('/gallery%20engifest%20suni.ejs', Controller.index.get);
// router.get('/gallery%20engifest%20suni%20anusthan.ejs', Controller.index.get);
// router.get('/gallery%20engifest%20suni%20nucleya.ejs', Controller.index.get);
router.get('/gallery/upload',Controller.upload.get);
router.post('/gallery/upload',Controller.upload.post);
router.get('/gallery/:subcategory/',Controller.category.get);
router.post('/gallery/:postId/approve',Controller2.approve.post);
module.exports=router;
