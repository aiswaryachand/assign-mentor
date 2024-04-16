const mongoose = require('mongoose');

const mentorSchema = new mongoose.Schema({
  name: String,
  expertise: String,
  studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'student' },
});

const Mentor = mongoose.model('Mentor', mentorSchema);

module.exports = Mentor;