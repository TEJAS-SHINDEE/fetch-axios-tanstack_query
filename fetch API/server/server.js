const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
      
const app = express();
app.use(cors());

const PORT = process.env.PORT;

const tony_info = {
    "name":"tony",
    "age":"21",
    "rollno":101
};

app.get('/tony-info',(req,res) => {
    try {
        console.log('your are on tony-info route');
        res.status(200).json(tony_info);
    }
    catch(error)    {   
        console.log("error occured : ",error);
        res.status(500).json({message : error});
    }
});

app.get('/',(req,res) => {
    console.log("you are on root route", PORT);
    res.status(200).send(`you are on root route and port : ${PORT}`);
});

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
});
