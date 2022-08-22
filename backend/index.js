const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();

app.use(cors());
app.use(bodyparser.json());


// database
const usersTableName = "Users"
const db = mysql.createConnection({
    host:'database-1.cozismofldbt.us-east-1.rds.amazonaws.com',
    port: '3306',
    user: 'admin',
    password:'hamandvin123',
    database: "Users_Prod"
});

// check database connection
db.connect(err=>{
    if(err) {console.log(err, 'dberr');}
    console.log('database connected..');
})

//get data
app.get('/allusers',(req, res)=>{
    console.log("get all");
    let qr = `select * from ${usersTableName}`;

    db.query(qr, (err,result)=>{
        console.log(result)
        if(err){
            console.log(err,'errs');
        }

        if(result.length > 0)
        {
            res.send({
                message: 'all user data',
                data: result
            });
        }
    });
});

//get single data
app.get('/user/:email', (req, res)=>{
    let gEM = req.params.email;

    db.query (`select * from ${usersTableName} where email like ?`,[gEM],

    (err,result)=>{

        if(err) {console.log(err);}
        if(result.length>0)
        {
            res.send({
                message: 'get single data',
                data:result
            });
        }
        else
        {
            res.send({
                message: 'data not found'
            });
        }
    });
});

//create data

app.post('/user', (req,res)=>{
    console.log(req.body, 'createdata');

    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;

    let qr = `insert into Users(username, email, pwd) 
        values('${username}', '${email}', '${password}')`;

    db.query(qr,(err,result)=>{
        if(err){console.log(err);}
        console.log(result, 'result')
        res.send({
            message:'data inserted',
        });
    });
});

//update single data
app.put('/user/:id',(req,res)=>{


    console.log(req.body, 'updatedata');

    let gID = req.params.id;
    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;

    let qr = `update ${usersTableName} set username = '${username}', email = '${email}', pwd = '${password}'
            where id = ${gID}`;
    
    db.query(qr,(err,result)=>{

            if(err) {console.log(err);}

            res.send({
                message:'data updated'
            });
    });
})

// delete single data

app.delete('/user/:email',(req,res)=>{
    let gEM = req.params.email;

    db.query (`delete from Users where email like ?`,[gEM],

    (err,result)=>{

        if(err) {console.log(err);}

        res.send(
            {
                message: 'data deleted'
            }
        )
    });
});


app.listen(3000,()=>{
    console.log('server running..');
})