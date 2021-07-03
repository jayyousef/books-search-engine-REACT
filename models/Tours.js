const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ToursSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: "String is Required"
  },

    //how to use a reference ID in mongoose
    tourOperator: [
        {
          type: Schema.Types.ObjectId,
          ref: "TourOperator"
        }
      ],

      address: {
        street: String,
        street2: String,
        city: String,
        state: {
            type: String,
            uppercase: true,
            required: true,
            enum: statesArray
        },
        zip: Number
    },

  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

//   Other possible "types"
//   boolean: Boolean,
//   array: Array,
  description: {
    type: String,
    validate: [({ length }) => length >= 6, "Description string should be more than 6 characters."]
  },

  cancellationPolicy: {
      type: String,
      validate: [({ length }) => length >= 6, "Description string should be more than 6 characters."]
  },

  startTimes: {
    type: Array,
  },

  length: {
  type: Number,
  },

  cost: {
    type: Number,
    required: "A price is Required",
    },

    maxNumber: Number,

},
{timestamps: true});

const Tours = mongoose.model("Tours", ToursSchema);

module.exports = Tours;