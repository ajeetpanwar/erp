const express = require("express")

const app = express()
const mysql = require('mysql')

const cors = require('cors')
const jwt = require("jsonwebtoken")
var bodyParser = require('body-parser')


const { database } = require('./config/keys')
const pool = mysql.createPool(database)
const queryGetUser = 'SELECT * FROM users WHERE username = ?'
function querySingleValue(query, value) {
    return new Promise((resolve, reject) => {
        try {
            pool.query(query, [value], (err, rows) => {
                if (err) {
                    return reject(err)
                } else {
                    return resolve(rows)
                }
            })
        } catch (err) {
            return (err)
        }
    })
}


app.use(cors())
const SECRETKEY = 'Vertex@1234'
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.listen(3001, () => {
    console.log("server running on port 3001");
});


// middleware function
const verifyTheToken = (req, res, next) => {

    // geting the token from header
    const bearer = req.headers['authorization']
    if(bearer){
        const bearerToken = bearer.split(" ")
        const token = bearerToken[1]

        jwt.verify(token,SECRETKEY, (err, token)=>{
            if(err) {
                sendStatus(403)
            } else {
                req.userData = data
            }
        })
    } else {
        res.sendStatus(403)
    }

}
app.use('/delete-user', verifyTheToken, (req,res)=>{
    // block 2
    console.log("user data block 2",req.userData)
    res.send("user deleted");

});
app.get('/getuser',function(req, res, next) {
    var getQuery="select * from `users`";
    pool.query(getQuery,function(err,result){

        if(err) throw err;
        console.log(result);
        res.send({ title: 'Employee Records',message:"Register Form", data:result,success:'' });

    });

});
app.get('/user/:id',function(req, res, next) {
    var id=req.params.id;
    var getQuery="select * from `users` WHERE `id` = ?";
    querySingleValue(getQuery, id)
    .then(response => {
        console.log(response[0])
        res.send({ title: 'Employee Records',message:"Register Form", data:response[0],success:'' });
        
    })
    

});

app.post("/userregister", (req,res,next) => {
    
    const { username, password ,mobile,email} = req.body
    console.log(username)
    var insertQuery='insert into `users` (`username`,`password`,`mobile`,`email`) VALUES (?,?,?,?)';
    var query=mysql.format(insertQuery,[username,password,mobile,email]);
    pool.query(query,function(err,response){
        if(err) throw err;
        console.log(response);
        res.send({ title: 'user  Records',message:"Register Form added ", data:response,success:'' });
    });
    
    
});

app.post("/login", (req,res) => {
    
    console.log(req.body.username)
    const { username, password } = req.body
    querySingleValue(queryGetUser, username)
    .then(response => {
        console.log(response)
        try {
            if (password !== response[0].password) {
                res.send('wrong password')
            } else {
                const user = {
                    username:response[0].password,
                }
                jwt.sign({user},SECRETKEY, (err, token)=>{
                    if(err) {
                        res.sendStatus(403)
                    } else {
                        res.json({
                            token
                        });
                    }
                });
                res.send('your are successfully login')
            }
        } catch (e) {
            res.send('wrong username')
        }
    })

    

    
});



// token
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiYWplZXQiLCJhZ2UiOjI3fSwiaWF0IjoxNTg3MzA4Mzc0fQ.ilkx3iuCFzigZyRwnfOMDguFI_Cdgyochp9gxC7SlHI
