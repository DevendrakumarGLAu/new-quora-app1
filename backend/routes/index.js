const express= require('express')
const router = express.Router()
const questionRouter =require('./Question')
// const answerRouter = require('./Answer')

router.get("/", (req, res)=>{
    res.send("this api is for quora clone")
});

router.use('/question', questionRouter)
// router.use('/answer', answerRouter)

module.exports= router