const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: User
    },
    markPresent: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});

const Attendance = new mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;