import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export function Getdata() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch("http://localhost:3005/order")
            .then(res => res.json())
            .then(data => setData(data))
    })
     const delt = (user_id) => {
        var key = { user_id: user_id }
        axios.post("http://localhost:3005/delete", key)
            .then((res) => {
                if (res.data.status === "error") {
                alert("datas are not deleted")
                }
                else if (res.data.status === "success") {
                    alert("datas are deleted")
                }
        })
    }
    
    return (
        <>
            <h1 className="text-center">VIEW DATABASE</h1>
            <div className="container p-3 m-3 align-items-center justify-content-center">
            <table className="table p-2 table-striped table-bordered ">
            <thead className="text-center fs-5">
              <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>PHONE</th>
                            <th>ADDRESS</th>
                            <th>PINCODE</th>
                            <th>RAM</th>
                            <th>STORAGE</th>
                            <th>PAYMENT</th>
                            <th>aLTERNUMBER</th>
                    
                       
                
              </tr>
            </thead>
            <tbody className="text-center">
            {
                data.map((value, index) => (
                    <>
                        <tr>
                        <td>{value.user_id}</td>
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                            <td>{value.phone_number}</td>
                            <td>{value.address}</td>
                            <td>{value.pincode}</td>
                            <td>{value.ram}</td>
                            <td>{value.storage}</td>
                            <td>{value.payment}</td>
                            <td>{value.alter_number}</td>
                             <Link to={`/single/${value.user_id}`}><button className="btn btn-primary">VIEW</button></Link>
                            <button className="btn btn-info" onClick={()=>{delt(value.user_id)}}>DELETE</button>
                            
                            </tr>
                    </>
                    
                ))
                }
                </tbody>
                </table>
                </div>
        </>
    );
}