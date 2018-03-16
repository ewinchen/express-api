const FabricSampleRequest = require('../dao/model/FabricSampleRequest')
const logger = require('../util/logger')

function getFsrByConditions(conditions) {
  return FabricSampleRequest.findOne(conditions)
}

module.exports = {
  getFsrByConditions
}