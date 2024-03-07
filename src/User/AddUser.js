import React, { useState } from 'react';
import studentstyles from "./student.module.css";
import axios from "axios";
import { NavLink } from 'react-router-dom';

const AddUser = () => {
    const [id,setId] = useState('');
    const [name,setName] = useState('');
    const [address,setAddress] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/user',{id,name,address})
        .then(res=>{
            alert('employee added succ..');
            setName("");
            setId("");
            setAddress("");

        })
        .catch(err=>{
            alert("unable to add employee");
        });
        //console.log(`name is ${name} email is${email} phone is ${phone} address is ${address}`);
    };

  return (
    <>
    <section className={studentstyles.subbanner}>
    <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='text-center'><h4>Add User</h4>
                    </div>
                    <ul className='d-flex justify-content-center breadcrumb'>
                        <li className='breadcrumb-item'><NavLink to="/">Home</NavLink></li>
                        <li className='breadcrumb-item'><NavLink to="/adduser">adduser</NavLink></li>
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
                        <input type='text' name='id' placeholder='id' required className='form-control' value={id} onChange={(e)=>setId(e.target.value)}/>
                    </div>
                    <div>
                        <input type='text' name='name' placeholder='name' required className='form-control' value={name} onChange={(e)=>setName(e.target.value)}/>
                    </div>
                    <div>
                        <input type='text' name='address' placeholder='address' required className='form-control' value={address} onChange={(e)=>setAddress(e.target.value)}/>
                    </div>
                    
                    <div>
                        <input type='submit' className='btn btn-primary' value="Add User"/>
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

export default AddUser;