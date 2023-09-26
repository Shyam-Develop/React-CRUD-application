import React from "react";
import './book.css';
import axios from "axios";

export function Booking() {
    function Handlers(event) {
        event.preventDefault()
         var name = document.getElementById("name").value
            
            
        var email = document.getElementById("email").value
        var address=document.getElementById("address").value
        var pin = document.getElementById("pin").value
        var phone = document.getElementById("phone").value
        var ram = document.getElementById("ram").value
            var storage = document.getElementById("storage").value
            
            var payment = document.getElementById("payment").value
            var key = {
                name: name,
                email: email,
                address:address,
                pin: pin,
                phone: phone,
                storage: storage,
                ram: ram,
                payment:payment
            }
            if (name == '') {
                alert("enter the name")
            }
            
            else if (email == '') {
                alert("enter the email")
            }
            else if (address == '') {
                alert("enter the address")
            }
                 else if (pin == '') {
                alert("enter the pin")
            }
            
            else if (phone == '') {
                alert("enter the phone")
            }
            else if (ram == '') {
                alert("enter the ram")
            }
            
            else if (storage == '') {
                alert("enter the storage")
            }
                else if (payment == '') {
                alert("enter the payment")
            }
            
           
            else {
                axios.post("http://localhost:3005/pay", key)
                    .then((res) => {
                        if (res.data.status === "error") {
                            alert("datas are not inserted")
                            window.location.reload()                        
                            
                        }
                        else if (res.data.status === "success") {
                            alert("datas are inserted")
                            window.location.href='/final'
                            
                        }
                        
                })
        }
    }
    return (
        <>
            
            <div className="book">
              <div class="form-container">
        <form onSubmit={Handlers} >
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" name="name" required/>
            </div>
            
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" name="email" required/>
            </div>
            
            <div class="form-group">
                <label for="address">Address:</label>
                <textarea id="address" name="address" rows="4" required></textarea>
                        </div>
                        <div class="form-group">
                <label for="phone">Pincode:</label>
                <input type="tel" id="pin" name="pin" required/>
            </div>
            
            <div class="form-group">
                <label for="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" required/>
            </div>
            
            <div class="form-group">
                <label for="ram">Select RAM Option:</label>
                <select id="ram" name="ram" required>
                    <option value="4gb">4GB</option>
                    <option value="6gb">6GB</option>
                    <option value="8gb">8GB</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="storage">Select Storage Option:</label>
                <select id="storage" name="storage" required>
                    <option value="64gb">64GB</option>
                    <option value="128gb">128GB</option>
                    <option value="256gb">256GB</option>
                </select>
            </div>
            
            <div class="form-group">
                <label for="payment">Select Payment Option:</label>
                <select id="payment" name="payment" required>
                    <option value="gpay">Google Pay (GPay)</option>
                    <option value="phonepe">PhonePe</option>
                    <option value="upi">UPI</option>
                </select>
            </div>
            
            <button type="submit" class="btn">Pay Now</button>
        </form>
                </div>
                </div>
        </>
    );
}