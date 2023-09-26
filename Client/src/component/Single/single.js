import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


export function Getsingle() {
     var { user_id } = useParams()
    const[name,setName]=useState('')
    const[email,setemail]=useState('')
    const[address,setaddress]=useState('')
    const[pincode,setpincode]=useState('')
    const [phonenumber, setphonenumber] = useState('') 
    const [ram, setram] = useState('') 
    const [storage, setstorage] = useState('') 
    const [payment, setpayment] = useState('') 
    
    
    useEffect(() => {
        fetch("http://localhost:3005/single/" + user_id)
            .then(res => res.json())
            .then((data) => {
            setName(data[0].name)
            setemail(data[0].email)
            setaddress(data[0].address)
            setpincode(data[0].pincode)
                setphonenumber(data[0].phonenumber)
                setram(data[0].ram)
                setstorage(data[0].storage)
                setpayment(data[0].payment)
                
                
           
        })
    })
    return (
        <>
            <h1>{name }</h1>
            <h1>{ email}</h1>
            <h1>{address }</h1>
            <h1>{pincode}</h1>
            <h1>{ram }</h1>
            <h1>{phonenumber}</h1>
            <h1>{storage}</h1>
            <h1>{payment }</h1>




            
            
        </>
    );
}