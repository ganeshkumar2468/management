const express = require("express")
const  router  = require("./api/users/user.router")
// intialization of express application
const app = express();
app.use(express.json());
require("dotenv").config();
app.get("/api",(req,res)=>{
        res.json({
            success:1,
            message:"this is rest api working"
        })
})

app.listen(5004,()=>{
       console.log("server running in PORT :5004")
    }
)

app.use("/api/users",router)