const express = require('express');
const router = express.Router();

// GeneralController
const GeneralController = require('../controller/api/GeneralController');
// Custom Api
const DefaultApiController = require('../controller/api/DefaultApiController');

// 基本CURD
router.get('/list/:modelName', GeneralController.list);
router.get('/show/:modelName/:id', GeneralController.show);
router.post('/create/:modelName', GeneralController.create);
router.post('/update/:modelName/:id', GeneralController.update);
// 根据条件查询
router.post('/listby/:modelName', GeneralController.listBy);
router.post('/showby/:modelName', GeneralController.showBy);
router.post('/updateby/:modelName', GeneralController.updateBy);

router.post('/upload', DefaultApiController.upload.single('upload'), DefaultApiController.postUpload)

module.exports = router;