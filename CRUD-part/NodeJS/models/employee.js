const mongoose = require('mongoose');

var Employee = mongoose.model('Pangolins', {
    age: { type: Number },
    family: { type: String },
    breed: { type: String },
    food: { type: String }
});

module.exports = { Employee };