const mongoose = require('mongoose');

const LABELS = ['Learning Unit', 'Lab', 'Example', 'Extra', 'Kata'];

const cardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'The phone brand is required'],
    maxlength: 100
  },
  description: {
    type: String,
  },
  position: {
    type: Number,
    required: true,
    unique: true
  },
  imageURl: {
    type: String,
  },
  label: {
    type: String,
    enum: LABELS
  },
  column: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Column',
    required: true
  }
}, {
    timestamps: true,
    toJSON: {
      transform: (doc, ret) => {
        ret.id = doc._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      }
    }
  });

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
