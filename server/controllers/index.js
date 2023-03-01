const Plan = require('../models');

module.exports = {
  get: (req, res) => {
    Plan.find({})
      .then((response) => res.status(200).send(response))
      .catch((err) => res.status(500).send(err));
  },
  post: (req, res) => {
    Plan.create(req.body)
      .then(() => res.sendStatus(201))
      .catch((err) => res.status(500).send(err));
  },
  put: (req, res) => {
    console.log('updating via: ', req.body.id);
    const filter = { _id: req.body.id };
    delete req.body.id;

    const update = { $push: { scenarios: req.body } };
    const options = { new: true };

    Plan.findOneAndUpdate(filter, update, options)
      .then(() => res.sendStatus(204))
      .catch((err) => res.status(500).send(err));
  },
};
