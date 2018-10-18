const FabricSampleRequest = require('../dao/model/FabricSampleRequest')
const logger = require('../helper/logger')

function getFsrByConditions(conditions) {
  return FabricSampleRequest.findOne(conditions)
}

module.exports = {
  getFsrByConditions
}