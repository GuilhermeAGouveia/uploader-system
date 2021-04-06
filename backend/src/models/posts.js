const mongoose = require("mongoose")

const PostSchema = new mongoose.Schema({
    name: String,
    size: Number,
    key: String,
    path: String,
    createAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model("Post", PostSchema)