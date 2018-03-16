const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fabircSampleRequestSchema = new Schema({
  fSRNo: String,
  salesTeam: String,
  salesNTAccount: String,
  salesName: String,
  customerCode: String,
  customerName: String,
  brand: String,
  customerLabel: String,
  season: String,
  year: String,
  custSeason: String,
  attentionTo: String,
  a4Receiver: String,
  destination: String,
  purpose: String,
  submissionDate: String,
  swatchRequest: String,
  remarks: String,
  status: String,
  attachment: String,
  logs: String,

  recap: {
    sheets: [{
      name: String,
      rows: [{
        index: Number,
        cells: [{
          index: Number,
          value: Object,
        }]
      }],
    }]
  }
});

const FabricSampleRequest = mongoose.model('FabricSampleRequest', fabircSampleRequestSchema);

module.exports = FabricSampleRequest;