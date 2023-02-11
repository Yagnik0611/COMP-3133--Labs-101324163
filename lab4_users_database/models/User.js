const express = require('express');
const mongoose = require('mongoose');


// Create the Mongoose schema
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    minlength: 4,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    suite: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
      validate: {
        validator: function (v) {
          return /^[a-zA-Z ]+$/.test(v);
        },
        message: 'City name can only contain alphabets and spaces',
      },
    },
    zipcode: {
      type: String,
      required: true,
      match: /^\d{5}-\d{4}$/,
    },
    geo: {
      lat: {
        type: String,
        required: true,
      },
      lng: {
        type: String,
        required: true,
      },
    },
  },
  phone: {
    type: String,
    required: true,
    match: /^\d{1}-\d{3}-\d{3}-\d{4}$/,
  },
  website: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return /^(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/.test(
          v
        );
      },
      message: '{VALUE} is not a valid URL',
    },
  },
  company: {
    name: {
      type: String,
      required: true,
    },
    catchPhrase: {
      type: String,
      required: true,
    },
    bs: {
      type: String,
      required: true,
    },}
  });


userSchema.pre('save', (next) => {
  console.log("Before Save")
  let now = Date.now()
   
  this.updatedat = now
  if (!this.created) {
    this.created = now
  }
  
  // Call the next function in the pre-save chain
  next()
});

userSchema.pre('findOneAndUpdate', (next) => {
  console.log("Before findOneAndUpdate")
  let now = Date.now()
  this.updatedat = now
  console.log(this.updatedat)
  next()
});


userSchema.post('init', (doc) => {
  console.log('%s has been initialized from the db', doc._id);
});

userSchema.post('validate', (doc) => {
  console.log('%s has been validated (but not saved yet)', doc._id);
});

userSchema.post('save', (doc) => {
  console.log('%s has been saved', doc._id);
});

userSchema.post('remove', (doc) => {
  console.log('%s has been removed', doc._id);
});

const User = mongoose.model("User", userSchema);
module.exports = User;