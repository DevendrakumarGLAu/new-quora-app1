const mongoose = require('mongoose')

const AnswerSchema = new mongoose.schema({
    answerName: String,
    questionId:{
            type:mongoose.Schema.types.ObjectId,
            ref: 'Questions'
    },
    questionUrl: String,
    createdAt:
    {
        type: Date,
        default: Date.now
    },
    answer:
    {
        type: mongoose.schema.types.ObjectId,
        ref: 'Answers'

    }
})

module.exports = mongoose.model('Questions', AnswerSchema);