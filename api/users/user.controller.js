const {create , getUsers , getUsersById , updateUsers , deleteUser ,getUserByEmail } = require("./user.service");
const { genSaltSync,hashSync,compareSync } = require("bcrypt")
const { sign } = require("jsonwebtoken");
module.exports={
    login:(req,res)=>{
        const body = req.body;
        getUserByEmail(body.email,(err,results)=>{
            if(err)
            {
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"Dtabase connection error"
                })
            }
            if(!results)
            {
              return res.json({
                success:0,
                data:"Invalid email or passwordd"
              })
            }
            const result =compareSync(body.password,results.password);
            if(result){
            results.password = undefined;
            const jsontoken =  sign({result:results},"qwe1234",{
                expiresIn:"15m"
            })
            return res.json({
                success:1,
                message:"login successfully",
                token:jsontoken
            })
        }else{
            return res.json({
                success:0,
                data:"Invalid email or password"
            })
        }
        })
    },
    createUser:(req,res)=>{
        const body = req.body;
        const salt = genSaltSync(10);
        body.password = hashSync(body.password,salt);
        create(body,(err,results)=>{
            if(err)
            {
                console.log(err);
                return res.status(500).json({
                    success:0,
                    message:"Dtabase connection error"
                })
            }
                            if(!results)
                {
                  return res.json({
                    success:0,
                    data:"Record not found"
                  })
                }
            return res.status(200).json({
                success:1,
                data:results
            })
        })
    },
    getUsersByUserId:(req,res)=>{
            const id = req.params.id;
        getUsersById(id,(err,results)=>{
                if(err)
                {
                    console.log(err);
                    return err;
                }
                if(!results)
                {
                  return res.json({
                    success:0,
                    data:"Record not found"
                  })
                }
                return res.json({
                    success:1,
                    data:results     
                })
        })
    },
    getAllUsers:(req,res)=>{
    getUsers((err,results)=>{
            if(err)
            {
                console.log(err);
                return err;
            }
            if(!results)
            {
              return res.json({
                success:0,
                data:"failed to update user"
              })
            }
            return res.json({
                success:1,
                data:results     
            })
    })
},
  updateUser:(req,res)=>{
    const body = req.body;
    const salt = genSaltSync(10);
    body.password =  hashSync(body.password,salt);
updateUsers(body,(err,results)=>{
        if(err)
        {
            console.log(err);
            return err;
        }
        return res.json({
            success:1,
            message:"updated Successfully"  
        })
})
},
deleteUsers:(req,res)=>{
    const id = req.body;
deleteUser(data,(err,results)=>{
        if(err)
        {
            console.log(err);
            return err;
        }
        if(!results)
        {
          return res.json({
            success:0,
            data:"Record not found"
          })
        }
        return res.json({
            success:1,
            message:"user deleted Successfully"    
        })
})
}
    
}