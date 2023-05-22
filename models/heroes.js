const { model, Schema } = require('mongoose');

const heroSchema = new Schema(
  {
    nickname: {
      type: String,
      required: [true, 'Nickname is required'],
    },
    realName: {
      type: String,
      required: [true, 'Real name is required'],
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
      // required: [true, 'Image is required'],
    },
  },

  { versionKey: false, timestamps: true }
);

const Hero = model('heroes', heroSchema);

module.exports = Hero;
