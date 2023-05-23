const { model, Schema } = require('mongoose');

const heroSchema = new Schema(
  {
    nickname: {
      type: String,
      required: [true, 'Nickname is required'],
      unique: true,
    },
    realName: {
      type: String,
      default: 'Unknown',
    },
    originDescription: {
      type: String,
      required: [true, 'Description is required'],
    },
    superpowers: {
      type: [String],
      required: [true, 'Description is required'],
    },
    catchPhrase: {
      type: [String],
      required: [true, 'Phrase is required'],
    },
    images: {
      type: [String],
    },
  },

  { versionKey: false, timestamps: true }
);

const Hero = model('heroes', heroSchema);

module.exports = Hero;
