const mongoose = require('mongoose')

const { Schema } = mongoose

const commentSchema = new Schema({
    note: {
        type: String,
        required: true
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true })

////////////////////////////////////
//// Export our Schema          ////
////////////////////////////////////
module.exports = commentSchema