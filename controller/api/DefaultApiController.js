const _ = require('lodash');
const multer = require('multer')
const path = require('path')

const DefaultService = require('../../service/DefaultService');

const getFsrByConditions = async (req, res, next) => {
  let conditions = req.body;
  if (_.isEmpty(conditions)) {
    res.status(400);
    res.send({ type: false, message: 'Need Conditions' })
  } else {
    try {
      let data = await DefaultService.getFsrByConditions(conditions)
      res.send({ type: true, data: data })
    } catch (error) {
      next(error)
    }
  }
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    let target = path.join('upload');
    cb(null, target)
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now())
  }
})

const upload = multer({ storage: storage })

const postUpload = async (req, res, next) => {
  res.json({ type: true, data: null });
}

module.exports = {
  getFsrByConditions,
  upload,
  postUpload
}