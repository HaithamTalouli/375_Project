const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();

app.use(cors());
app.use(bodyparser.json());


// database

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'375db',
    port:3306
});

// check database connection

db.connect(err=>{
    if(err) {console.log(err, 'dberr');}
    console.log('database connected..');
})

//get data

app.get('/user',(req, res)=>{
    let qr = `select * from user`;

    db.query(qr, (err,result)=>{
        if(err){
            console.log(err,'errs');
        }

        if(result.length>0)
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

    db.query (`select * from user where email like ?`,[gEM],

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

//get single data by username
// app.get('/user/:username', (req, res)=>{
//     let gUN = req.params.username;

//     db.query (`select * from user where email like ?`,[gUN],

//     (err,result)=>{

//         if(err) {console.log(err);}
//         if(result.length>0)
//         {
//             res.send({
//                 message: 'get single data',
//                 data:result
//             });
//         }
//         else
//         {
//             res.send({
//                 message: 'data not found'
//             });
//         }
//     });
// });

// get user by email

// app.get('/user/:email', (req, res)=>{
//     let gEM = req.params.email;
//     let qr = `select * from user where email = ${gEM}`;

//     db.query(qr, (err,result)=>{
//         if(err) {console.log(err);}

//         if(result.length>0)
//         {
//             res.send({
//                 message: 'got data by email',
//                 data: result
//             });
//         }
//         else
//         {
//             res.send({
//                 message: 'data not found'
//             });
//         }
//     });
// });

//create data

app.post('/user', (req,res)=>{
    console.log(req.body, 'createdata');

    let username = req.body.username;
    let email = req.body.email;
    let password = req.body.password;

    let qr = `insert into user(username, email, password) 
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

    let qr = `update user set username = '${username}', email = '${email}', password = '${password}'
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

    let qID = req.params.email;
    
    let qr = `delete from user where email like '${qID}' `;

    db.query(qr, (err,result)=>{
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