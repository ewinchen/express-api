const express = require('express');
const router = express.Router();

// GeneralApi
const GeneralApi = require('../api/GeneralApi');
// 基本CURD
router.get('/list/:modelName', GeneralApi.list);
router.get('/show/:modelName/:id', GeneralApi.show);
router.post('/create/:modelName', GeneralApi.create);
router.post('/update/:modelName/:id', GeneralApi.update);
// 根据条件查询
router.post('/listby/:modelName', GeneralApi.listBy);
router.post('/showby/:modelName', GeneralApi.showBy);

// Custom Api
const fabricSampleRequestApi = require('../api/fabricSampleRequestApi')


module.exports = router;