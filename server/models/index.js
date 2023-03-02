/* eslint-disable no-unused-vars */
const mongoose = require('mongoose');
const db = require('../db');

const plansSchema = mongoose.Schema({
  planName: { type: String, lowercase: true },
  planType: { type: String, uppercase: true },
  coverageType: { type: String, lowercase: true },
  deductible: Number,
  oop: Number,
  coinsurance: Number,
  premium: Number,
  premFreq: Number,
  pcCoinsurance: Number,
  scCoinsurance: Number,
  diagCoinsurance: Number,
  specImgCoinsurance: Number,
  ucCoinsurance: Number,
  erCoinsurance: Number,
  facilHospCoinsurance: Number,
  physHospCoinsurance: Number,
  mentOutCoinsurance: Number,
  pregOffCoinsurance: Number,
  pregPhysCoinsurance: Number,
  pregFacilCoinsurance: Number,
  scenarios: [{
    pcVisits: Number,
    scVisits: Number,
    mentVisits: Number,
    ucVisits: Number,
    erVisits: Number,
    hospStays: Number,
    surgeries: Number,
    pregnancy: Boolean,
  }],
});

const Plan = mongoose.model('Plan', plansSchema);

module.exports = Plan;
