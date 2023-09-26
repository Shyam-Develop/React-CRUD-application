import React from "react";
import './login.css';
import axios from "axios";



export function Login() {
    function handlersub(event) {
        event.preventDefault()
        var username = document.getElementById("username").value
        var password = document.getElementById("password").value
        let key = {
            username: username,
            password: password
        }
        if (username == '') {
            alert("please enter the valid username")
        }
        else if (password == '') {
            alert("please enter the valid password")
        }
        else {
            axios.post("http://localhost:3005/login", key)
                .then((res) => {
                    if (res.data.status === "empty_set") {
                        console.log(key)
                        alert("please enter the username or register")
                            
                    }
                    else if (res.data.status === "success") {
                        var id=res.data.id
                        alert("successfully login")
                        window.location.href='/product'
                    }
                    else if (res.data.status === "invalid_user") {
                        alert("all the datas are valid")
                    }
                    else {
                        alert("please enter your details")
                    }
                        
                })
        }
            
        }
    return (
        <>
        <div className="login">
         <div class="container">
                    <h2 className="text-center">Login</h2>
                    <form onSubmit={handlersub}>
                        <div class="form-group">
                            <label for="username">Username:</label>
                            <input type="text" id="username" name="username" required />
                        </div>
                        <div class="form-group">
                            <label for="password">Password:</label>
                            <input type="password" id="password" name="password" required />
                        </div>
                      <button type="submit" class="btn">Login</button>
                    </form>
                </div>
                </div>

        </>
    );
}