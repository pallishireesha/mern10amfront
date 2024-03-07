import React, { useState } from 'react';
import studentstyles from "./student.module.css";
import axios from "axios";
import { NavLink, useNavigate } from 'react-router-dom';

const SignupSql = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [phone,setPhone] = useState('');
    const [address,setAddress] = useState('');
    let navigate = useNavigate();
    const submitHandler = (e) => {
        let id =101;
        e.preventDefault();
        axios.post('http://localhost:4000/signup',{id,name,email,password,phone,address})
        .then(res=>{
            alert('User added succ..');
            setName("");
            setEmail("");
            setPassword("");
            setPhone("");
            setAddress("");
            navigate("/loginsql")
        })
        .catch(err=>{
            alert("unable to add ...");
        });
        //console.log(`name is ${name} email is${email} phone is ${phone} address is ${address}`);
    };

  return (
    <>
    <section className={studentstyles.subbanner}>
    <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='text-center'><h4>Signup</h4>
                    </div>
                    <ul className='d-flex justify-content-center breadcrumb'>
                        <li className='breadcrumb-item'><NavLink to="/">Home</NavLink></li>
                        <li className='breadcrumb-item'><NavLink to="/signup">Signup</NavLink></li>
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
                        <input type='password' name='password' placeholder='password' required className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <input type='text' name='phone' placeholder='phone' required  className='form-control' value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                    </div>
                    <div>
                        <input type='text' name='address' placeholder='address' required className='form-control' value={address} onChange={(e)=>setAddress(e.target.value)}/>
                    </div>
                    
                    <div>
                        <input type='submit' className='btn btn-primary' value="Signup"/>
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

export default SignupSql;