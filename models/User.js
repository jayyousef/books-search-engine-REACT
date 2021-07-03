const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');
const secret = require('../config').secret;
// const id = mongoose.Types.ObjectId();

//hashes password for security before it gets to the database
UserSchema.methods.setPassword = function(password){
      this.salt = crypto.randomBytes(16).toString('hex');
      this.password = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
    };

const UserSchema = new Schema({
    //generates a session token for authentication
  token: this.generateJWT(),

  name: {
      type: String, 
      lowercase: true, 
      required: [true, "can't be blank"], 
      match: [/^[a-zA-Z0-9]$/, 'is invalid'], 
      index: true},

  email: {type: String, 
    lowercase: true, 
    required: [true, "can't be blank"], 
    match: [/\S@\S\.\S/, 'is invalid'], 
    index: true},

  password: {
    type: string,
    validate: [({ length }) => length > 8, "Description string should be at least 8 characters."]
  },

  dateCreated: {
    type: Date,
    default: Date.now
  },
},
{timestamps: true});

  UserSchema.plugin(uniqueValidator, {message: 'is already taken.'});

  //create token to use as session
  UserSchema.methods.generateJWT = function() {
      var today = new Date();
      var exp = new Date(today);
      exp.setDate(today.getDate() + 60);
    
      return jwt.sign({
        id: this._id,
        username: this.username,
        exp: parseInt(exp.getTime() / 1000),
      }, secret);
    };

const User = mongoose.model("User", UserSchema);

module.exports = User;
