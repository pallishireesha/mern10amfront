import React, { useState } from 'react';
import studentstyles from "./student.module.css";
import axios from "axios";
import { NavLink, useNavigate } from 'react-router-dom';

const AddStudent = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [address,setAddress] = useState('');
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('https://mern10ambackend.onrender.com/student',{name,email,phone,address})
        .then(res=>{
            alert('student added succ..');
            setName("");
            setEmail("");
            setPhone("");
            setAddress("");
            navigate("/admindashboard");

        })
        .catch(err=>{
            alert("unable to add student");
        });
        //console.log(`name is ${name} email is${email} phone is ${phone} address is ${address}`);
    };

  return (
    <>
    <div className={studentstyles.addstudent}>
    <div className='container my-5'>
            <div className='row'>
                <div className='col-md-12'>
               <div className={studentstyles.w_400}>
                <form onSubmit={submitHandler}>
                    <div>
                        <input type='text' name='name' placeholder='name' required className='form-control' value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div>
                        <input type='email' name='email' placeholder='email' required className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <input type='text' name='phone' placeholder='phone' required pattern='[0-9]{10,}' className='form-control' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    </div>
                    <div>
                        <input type='text' name='address' placeholder='address' required className='form-control' value={address} onChange={(e)=>setAddress(e.target.value)}/>
                    </div>
                    <div>
                        <input type='submit' className='btn btn-primary' value="Add Student"/>
                    </div>
                </form>
               </div>
                </div>
                </div>
                </div>
    </div>
        
    </>
  )
}

export default AddStudent;