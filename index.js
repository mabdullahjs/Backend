require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routes = require('./routes/routes')
const userRoutes = require('./routes/user')


//cors for production
var cors = require('cors')
app.use(cors()) 

//middleware
app.use(express.json())
app.use((req, res, next)=>{
    console.log(req.path , req.method);
    next()
})
mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_DB)
.then(()=>{
    app.listen(process.env.PORT || 4000)
})
.catch((error)=>{
    console.log(error);
})

//routes
app.use('/api/username' , routes);
app.use('/api/user' , userRoutes);
