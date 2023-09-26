import React from "react";
import './register.css';
import axios from "axios";


export function Register() {
    function Handler(event) {
        event.preventDefault()
         var fname = document.getElementById("fname").value
            var lname = document.getElementById("lname").value
            var phone = document.getElementById("phone").value
            var email = document.getElementById("email").value
            var city = document.getElementById("city").value
            var state = document.getElementById("state").value
        var password = document.getElementById("password").value
        var roll = document.getElementById("roll").value
            var key = {
                fname: fname,
                lname: lname,
                phone: phone,
                email: email,
                city: city,
                state: state,
                password: password,
                roll:roll
            }
            if (fname == '') {
                alert("enter the fname")
            }
            else if (lname == '') {
                alert("enter the lname")
            }
            else if (email == '') {
                alert("enter the email")
            }
            
            else if (phone == '') {
                alert("enter the phone")
            }
            
            else if (city == '') {
                alert("enter the city")
            }
            else if (state == '') {
                alert("enter the state")
            }
            else if (password == '') {
                alert("enter the password")
            }
            else {
                axios.post("http://localhost:3005/wait", key)
                    .then((res) => {
                        if (res.data.status === "error") {
                            alert("datas are not inserted")
                            window.location.reload()                        
                            
                        }
                        else if (res.data.status === "success") {
                            alert("datas are inserted")
                            window.location.href='/login'
                        }
                        
                })
        }
    }
    return (
        <>
            <div className="insert">
    <h1 className="text-center bg-dark text-light">REGISTER PAGE</h1>
    <form onSubmit={Handler}>
    
        <label for="first_name">First Name:</label>
        <input type="text" id="fname" name="fname" required/><br/><br/>
        
        <label for="last_name">Last Name:</label>
        <input type="text" id="lname" name="lname" required/><br/><br/>

        <label for="phone_number">Phone Number:</label>
        <input type="number" id="phone" name="phone"/><br/><br/>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required/><br/><br/>

        <label for="city">City:</label>
        <input type="text" id="city" name="city"/><br/><br/>

        <label for="state">State:</label>
        <input type="text" id="state" name="state"/><br/><br/>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required/><br/><br/>
        <label>Roll</label>
        <input type="checkbox" id="roll" name="roll" value="user" required/><h3>user</h3><br/><br/>
            <input type="submit" value="Submit" />
    </form>
    </div> 
        </>
    );
}