const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OperatorSchema = new Schema({
  name: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9]$/, "is invalid"],
    index: true,
  },

  address: {
    street: String,
    street2: String,
    city: String,
    state: {
      type: String,
      uppercase: true,
      required: true,
      enum: statesArray,
    },
    zip: Number,
  },

  email: {
    type: String,
    lowercase: true,
    required: [true, "can't be blank"],
    match: [/\S@\S\.\S/, "is invalid"],
    index: true,
  },

  maxNumber: Number,

  tours: [
    //populate all info needed from the User
    {
      type: Schema.Types.ObjectId,
      ref: "Tours"
    }
  ],
});

const Operator = mongoose.model("Operator", OperatorSchema);

module.exports = Operator;
