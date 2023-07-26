const { Schema } = require("mongoose");

module.exports = new Schema({
      postcode: String,
      roadAddress: String,
      jibunAddress: String,
      detailAddress: String,
      extraAddress: String
    });