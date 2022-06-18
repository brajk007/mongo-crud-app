const express = require('express')
const main = require('./router/main')
const cors = require('cors')
const app = express()
const host = '0.0.0.0';
require('dotenv').config()
const port =process.env.PORT || 8081;

app.use(cors())
const connectDB = require('./db/connect')




app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api/fetch',main)

const start=async()=>{
    try {
       await connectDB(process.env.MONGO_URL) 
       app.listen(port,host,()=>{
    console.log('listening from server')
})
    } catch (error) {
      console.log(error)  
    }
}


start()
