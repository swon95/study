const mongoose = require("mongoose");
const DataSchema = require('./schemas/data')

exports.Data = mongoose.model('Data', DataSchema);