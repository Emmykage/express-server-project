const express = require("express")
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config();

mongoose.connect("mongodb://localhost:27017/exerciseDB", {useNewUrlParser: true})


const app = express()

const envVariable = process.env.ATLAS_URL

const port = process.env.PORT || 5000;
console.log(envVariable)
app.use(cors());
app.use(express.json());

const usersRouter = require('./routes/users');
const exerciseRouter = require('./routes/exercises');


app.use('/exercises', exerciseRouter);
app.use('/users', usersRouter);

app.listen(port, function(){
    console.log("Listening at port 5000")
})
app.get("/", (res, req)=> {
    console.log(req)
})

mongoose.connection.once('open', ()=>{
    console.log("MongoDB database connected successfully")
})