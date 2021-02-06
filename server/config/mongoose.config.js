const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/exam_retake_db",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

    .then(()=> console.log('Your Shit Working'))
    .catch(err => console.log ("Your Shits Broke Bitch!", err));