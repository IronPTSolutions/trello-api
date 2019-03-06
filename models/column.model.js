const mongoose = require('mongoose');

const Card = require('../models/card.model');

const columnSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'The phone brand is required']
  },
  position: {
    type: Number,
    required: true,
    unique: true
  }
}, {
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      }
    }
});

columnSchema.virtual('cards', {
  ref: Card.modelName,
  localField: '_id',
  foreignField: 'column',
  options: { sort: { position: -1 } }
})

const Column = mongoose.model('Column', columnSchema);

module.exports = Column;
