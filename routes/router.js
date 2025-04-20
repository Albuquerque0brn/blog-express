const express = require('express');
const router = express.Router();

const postsController = require('../controllers/postsController');
const adminController = require('../controllers/adminController');

router.get('/', postsController.index);
router.get('/posts/:id', postsController.show);

router.get('/admin', adminController.index);
router.get('/admin/create', adminController.create);
router.post('/admin/create', express.urlencoded({ extended: true }), adminController.save);
router.get('/admin/edit/:id', adminController.edit);
router.post('/admin/update/:id', express.urlencoded({ extended: true }), adminController.update);
router.post('/admin/delete/:id', express.urlencoded({ extended: true }), adminController.delete);

module.exports = router;
