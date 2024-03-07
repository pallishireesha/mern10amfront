import React, { useState } from 'react';
import studentstyles from "./student.module.css";
import axios from "axios";
import { NavLink, useNavigate } from 'react-router-dom';

const LoginSql = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    let navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/login',{email,password})
        .then((res)=>{
         if(res.data.length == 1){
            navigate('/admindashboard');
         } 
         else{
            alert("Invalid username & password.");
         }    
      })
        .catch((err)=>{
            alert("Invalid username & password.");
        });
        //console.log(`name is ${name} email is${email} phone is ${phone} address is ${address}`);
    };

  return (
    <>
    <section className={studentstyles.subbanner}>
    <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='text-center'><h4>Login</h4>
                    </div>
                    <ul className='d-flex justify-content-center breadcrumb'>
                        <li className='breadcrumb-item'><NavLink to="/">Home</NavLink></li>
                        <li className='breadcrumb-item'><NavLink to="/adminlogin">Login</NavLink></li>
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
                        <input type='email' name='email' placeholder='email' required className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </div>
                   
                    <div>
                        <input type='password' name='password' placeholder='password' required className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                    </div>
                    <div>
                        <input type='submit' className='btn btn-primary' value="Login"/>
                    </div>
                </form>
                <div>
                    <NavLink to="/signup">Create new user</NavLink>
                </div>
               </div>
                </div>
                </div>
                </div>
    </div>
        
    </>
  )
}

export default LoginSql;