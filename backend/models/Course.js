const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  amount: { type: Number, required: true },
  duration: { type: String, required: true },
});

module.exports = mongoose.model('Course', CourseSchema);
