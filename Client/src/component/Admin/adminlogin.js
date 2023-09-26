import React from "react";
import axios from "axios";

export function Admin() {
     function handlersub(event) {
        event.preventDefault()
        var email = document.getElementById("email").value
        var password = document.getElementById("password").value
        let key = {
            email: email,
            password: password
        }
        if (email == '') {
            alert("please enter the valid email")
        }
        else if (password == '') {
            alert("please enter the valid password")
        }
        else {
            axios.post("http://localhost:3005/admin", key)
                .then((res) => {
                    if (res.data.status === "empty_set") {
                        console.log(key)
                        alert("please enter the email or register")
                            
                    }
                    else if (res.data.status === "success") {
                       
                        alert("successfully login")
                        window.location.href='/admin'
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
                            <label for="email">Email:</label>
                            <input type="text" id="email" name="email" required />
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