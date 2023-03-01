const Plan = require('../models');

module.exports = {
  get: (req, res) => {
    Plan.find({})
      .then((response) => res.status(200).send(response))
      .catch((err) => res.status(500).send(err));
  },
  post: (req, res) => {
    console.log('posting: ', req.body);
    Plan.create(req.body)
      .then(() => res.sendStatus(201))
      .catch((err) => res.status(500).send(err));
  },
  put: (req, res) => {
    Plan.findOneAndUpdate()
      .then(() => res.sendStatus(204))
      .catch((err) => res.status(500).send(err));
  },
};
