const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const database = require("mysql")



const connect = express()
connect.use(cors())
connect.use(bodyparser.json())
connect.use(express.json())
connect.use(express.static("public"))



connect.use(bodyparser.urlencoded({ extended: true }))


let databaseconnection = database.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"Rohan@2001",
    database:"iphone"
})
databaseconnection.connect(function (error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("database is connected");
    }
})



connect.post('/wait',(request,response)=>{
    let {fname,lname,phone,email,city,state,password,roll} = request.body
    let sql = 'insert into list(first_name,last_name,phone_number,email,city,state,username,password,role) values(?,?,?,?,?,?,?,?,?)'
    databaseconnection.query(sql, [fname,lname,phone,email,city,state,email,password,roll], (error, result) => {
        if (error) {
            response.send({"status":"error"})
            console.log(error)
        }
        else {
            response.send({"status":"success"})
            }
    })
})
connect.post('/login', (request, response) => {
    let { username, password } = request.body
    let sql = 'select * from list where username=?'
    databaseconnection.query(sql, [username], (error, result) => {
        if (error) {
            response.send({"status":"empty_set"})
        }
        else if (result.length > 0) {
            let username1 = result[0].username
            let password1 = result[0].password
            let id=result[0].id
            
            if (username1===username && password1 === password) {
                response.send({"status":"success","id":id})
            }
            else {
                response.send({"status":"invalid_user"})
            }
        }
        else {
            response.send({"status":"error"})
        }
    })
})
connect.post('/pay',(request,response)=>{
    let {name,email,address,pincode,phonenumber,ram,storage,payment} = request.body
    let sql = 'insert into orderlist(name,email,address,pincode,phone_number,ram,storage,payment) values(?,?,?,?,?,?,?,?)'
    databaseconnection.query(sql, [name,email,address,pincode,phonenumber,ram,storage,payment], (error, result) => {
        if (error) {
            response.send({"status":"error"})
            console.log(error)
        }
        else {
            response.send({"status":"success"})
            }
    })
})
connect.get('/order', (request, response) => {
    let sql = 'select * from orderlist'
    databaseconnection.query(sql, (error, result) => {
        if (error) {
            response.send(error)
            console.log(error)
        }
        else {
            response.send(result)
        }
    })
})
connect.get('/single/:user_id', (request, response) => {
    let { user_id}=request.params
    let sql = 'select * from orderlist where user_id=?'
    databaseconnection.query(sql, [user_id], (error, result) => {
       if (error) {
            response.send(error)
            console.log(error)
        }
        else {
            response.send(result)
        } 
    })
})
connect.post('/delete', (request, response) => {
    let user_id = request.body.user_id
    let sql = 'delete from orderlist where user_id=? '
    databaseconnection.query(sql, [user_id], (error, result) => {
        if (error) {
            response.send(error)
            console.log(error)
        }
        else {
            response.send(result)
        } 
    })
})
connect.post('/admin', (request, response) => {
    let { email, password } = request.body
    let sql = 'select * from admin where email=?'
    databaseconnection.query(sql, [email], (error, result) => {
        if (error) {
            response.send({"status":"empty_set"})
        }
        else if (result.length > 0) {
            let email1 = result[0].email
            let password1 = result[0].password
           
            
            if (email1===email && password1 === password) {
                response.send({"status":"success"})
            }
            else {
                response.send({"status":"invalid_user"})
            }
        }
        else {
            response.send({"status":"error"})
        }
    })
})
connect.listen(3005, () => {
    console.log("your server is running in port 3005");
})