const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BookingsSchema = new Schema({
    travellerName: {
    type: String,
    trim: true,
    required: "Please try again, a string is Required"
  },

    //how to use a reference ID in mongoose
    userID: [
        //populate all info needed from the User
        {
          type: Schema.Types.ObjectId,
          ref: "User"
        }
      ],

      activity: [{
        //populate all info needed from the Tour for the activity chosen
        type: Schema.Types.ObjectId,
        ref: "Tours",
      }],

      phone: {
        type: String,
        validate: [({ length }) => length >= 6, "Description string should be more than 6 characters."],
        required: [true, 'User phone number required']
      },

  email: {
    type: String,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
  },

  specialRequirements: String,

  participants: Number,

  initialCost: {
    type: Number,
    },

    otherFees: Number,
    totalCost: Number

    //   Other possible "types"
//   boolean: Boolean,
//   array: Array,

},
{timestamps: true});

const Bookings = mongoose.model("Bookings", BookingsSchema);

module.exports = Bookings;