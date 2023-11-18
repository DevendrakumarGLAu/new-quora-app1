const mongoose = require('mongoose');
const url = "mongodb+srv://devendra1997kumar:LQ3jTGhzi8Af6wVm@quora.slbyz81.mongodb.net/?retryWrites=true&w=majority";

  module.exports.connect= ()=>{
    mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true
    }).then(()=>{
        console.log("connected to Mongodb successfully");
    })
        .catch((err) => {
            console.error("Error connecting to the database:", err);
        });
};