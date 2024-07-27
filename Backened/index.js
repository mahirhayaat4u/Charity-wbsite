const express=require("express");
const app=express();
const routes=require("./routes/User")
const database = require("./config/database");

const cors = require("cors");
require('dotenv').config();

const PORT=process.env.PORT || 4000;

database.connect();

app.use(express.json());

app.use(
	cors({
		origin:"http://localhost:3000",
		credentials:true,
	})
)

app.use(routes);

app.get("/",(req,res)=>{
    return res.json({
        success:true,
        message:'YOUR SERVER IS RUNNING....'
    });
});

app.listen(PORT,()=>{
    console.log(`app is running on port ${PORT}`);
})