const mongoose = require('mongoose');

require('../dao/model/General');

class GeneralService {
  constructor(modelName) {
    this.model = mongoose.model(modelName);
  }

  async list(pageNum, pageSize, isTotal) {
    let total = isTotal ? await this.model.find().count() : undefined;
    let data;
    if (pageSize === -1) {
      data = await this.model.find().sort({ createAt: -1 })
    } else {
      data = await this.model.find().sort({ createAt: -1 }).skip((pageNum - 1) * pageSize).limit(pageSize)
    }
    return { total, data };
  }

  show(id) {
    return this.model.findById(id);
  }

  create(inData) {
    return this.model.create(inData);
  }

  update(id, inData) {
    return this.model.findByIdAndUpdate(id, inData);
  }

  async listBy(filter, pageNum, pageSize, isTotal) {
    let total = isTotal ? await this.model.find(filter.conditions).count() : undefined;
    let data;
    if (pageSize === -1) {
      data = await this.model.find(filter.conditions).select(filter.projections).sort({ createAt: -1 })
    } else {
      data = await this.model.find(filter.conditions).select(filter.projections).sort({ createAt: -1 }).skip((pageNum - 1) * pageSize).limit(pageSize)
    }
    return { total, data };
  }

  showBy(conditions) {
    return this.model.findOne(conditions)
  }
}



module.exports = GeneralService;