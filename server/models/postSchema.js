const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    content: {
        type: String,
    },
    image: {
        type: String,
        default: ''
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
})

module.exports = mongoose.model("Post", postSchema);