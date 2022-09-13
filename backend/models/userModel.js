const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "email hayg buruu bn!"]
    },
    password: {
        type: String,
        minlength: 4,
        required: [true, "Password missing!"],
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

const userModel = mongoose.model("aws-test-user", userSchema)
module.exports = { userModel };
