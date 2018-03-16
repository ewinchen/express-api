const _ = require('lodash');

const fabricSampleRequestService = require('../service/fabricSampleRequestService');

const getFsrByConditions = async (req, res, next) => {
  let conditions = req.body;
  if (_.isEmpty(conditions)) {
    res.status(400);
    res.send({ type: false, message: 'Need Conditions' })
  } else {
    try {
      let data = await fabricSampleRequestService.getFsrByConditions(conditions)
      res.send({ type: true, data: data })
    } catch (error) {
      next(error)
    }
  }
}

module.exports = {
  getFsrByConditions
}