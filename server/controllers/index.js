const models = require('../models');

module.exports = {
  get: (req, res) => {
    models.retrieveAllPlans()
      .then((response) => res.status(200).send(response.data))
      .catch((err) => res.status(500).send(err));
  },
  post: (req, res) => {
    models.createNewPlan(req.body)
      .then(() => res.sendStatus(201))
      .catch((err) => res.status(500).send(err));
  },
  put: (req, res) => {
    models.updatePlan(req.body)
      .then(() => res.sendStatus(204))
      .catch((err) => res.status(500).send(err));
  },
};
