const Column = require('../models/column.model');
const Card = require('../models/card.model');

const createError = require('http-errors');

module.exports.list = (req, res, next) => {
  Column.find()
    .populate('cards')
    .then(columns => res.json(columns))
    .catch(next);
}

module.exports.get = (req, res, next) => {
  Column.findById(req.params.id)
    .populate('cards')
    .then(column => {
      if (!column) {
        throw createError(404, 'column not found');
      } else {
        res.json(column);
      }
    })
    .catch(next);
}

module.exports.update = (req, res, next) => {
  Column.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(column => {
      if (!column) {
        throw createError(404, 'column not found');
      } else {
        res.json(column);
      }
    })
    .catch(next);
}

module.exports.create = (req, res, next) => {
  const column = new Column(req.body);

  column.save()
    .then(column => res.status(201).json(column))
    .catch(next);
}

module.exports.delete = (req, res, next) => {
  Column.findByIdAndDelete(req.params.id)
    .then(column => {
      if (!column) {
        throw createError(404, 'Column not found');
      } else {
        Card.deleteMany({ column: column._id })
          .then(() => res.status(204).json())
          .catch(next);
      }
    })
    .catch(next);
}