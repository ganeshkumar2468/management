const mysql = require("mysql")
const con = require("../../config/config")

exports.view = (req,res)=>{
    con.query("SELECT * FROM user", function (err, result, fields) {
        if (err) throw err;
        res.render("home",{result})
    });

}

exports.find = (req,res)=>{
    const searhitem = req.body.search
    con.query("SELECT * FROM user where first_name like ? or last_name like ?",['%'+searhitem+'%','%'+searhitem+'%'], function (err, result, fields) {
        if (err) throw err;        
        res.render("home",{result})
    });

}

exports.insert = (req,res)=>{
   res.render('adduser')
}

exports.insertuser = (req,res)=>{
    const {fname,lname,email,phone,comment} = req.body
    con.query("insert into user set first_name =?, last_name =?, email=?, phone=?, comment=?",[fname,lname,email,phone,comment], function (err, result, fields) {
        if (err) throw err;
        if(result)
        res.render("adduser",{message:"details added successfully"})   
    });
}

