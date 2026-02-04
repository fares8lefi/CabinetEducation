const mongoose = require("mongoose");

const consultationSchema = new mongoose.Schema({
    consultationDate: {
        type: Date,
        required: true
    },
    startHour: {
        type: String,
        required: true
    },
    endHour: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
        enum: ["pending", "confirmed", "cancelled"],
        default: "pending"
    },
    
})

const consultationModel = mongoose.model("consultation", consultationSchema);

module.exports = consultationModel;
