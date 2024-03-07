import React, { useState } from 'react';
import studentstyles from "./student.module.css";
import axios from "axios";
import { NavLink } from 'react-router-dom';

const AddClient = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [gstin,setGstin] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/client',{name,email,phone,gstin,username,password})
        .then(res=>{
            alert('client added succ..');
            setName("");
            setEmail("");
            setPhone("");
            setGstin("");
            setUsername("");
            setPassword("");

        })
        .catch(err=>{
            alert("unable to add client");
        });
        //console.log(`name is ${name} email is${email} phone is ${phone} address is ${address}`);
    };

  return (
    <>
    <section className={studentstyles.subbanner}>
    <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='text-center'><h4>Add Client</h4>
                    </div>
                    <ul className='d-flex justify-content-center breadcrumb'>
                        <li className='breadcrumb-item'><NavLink to="/">Home</NavLink></li>
                        <li className='breadcrumb-item'><NavLink to="/addclient">addclient</NavLink></li>
                    </ul>
                </div>
            </div>
    </div>
    </section>
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
                        <input type='text' name='gstin' placeholder='gstin' required  className='form-control' value={gstin} onChange={(e)=>setGstin(e.target.value)}/>
                    </div>
                    <div>
                        <input type='text' name='username' placeholder='username' required className='form-control' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    </div>
                    <div>
                        <input type='password' name='password' placeholder='password' required className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    
                    <div>
                        <input type='submit' className='btn btn-primary' value="Add Employee"/>
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

export default AddClient;