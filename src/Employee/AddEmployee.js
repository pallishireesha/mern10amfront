import React, { useState } from 'react';
import studentstyles from "./student.module.css";
import axios from "axios";
import { NavLink } from 'react-router-dom';

const AddEmployee = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [salary,setSalary] = useState('');
    const [address,setAddress] = useState('');
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('https://mern10ambackend.onrender.com/employee',{name,email,phone,salary,address})
        .then(res=>{
            alert('employee added succ..');
            setName("");
            setEmail("");
            setPhone("");
            setSalary("");
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
                    <div className='text-center'><h4>Add Employee</h4>
                    </div>
                    <ul className='d-flex justify-content-center breadcrumb'>
                        <li className='breadcrumb-item'><NavLink to="/">Home</NavLink></li>
                        <li className='breadcrumb-item'><NavLink to="/addstudent">addemployee</NavLink></li>
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
                        <input type='text' name='salary' placeholder='salary' required pattern='[0-9]{4,}' className='form-control' value={salary} onChange={(e)=>setSalary(e.target.value)}/>
                    </div>
                    <div>
                        <input type='text' name='address' placeholder='address' required className='form-control' value={address} onChange={(e)=>setAddress(e.target.value)}/>
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

export default AddEmployee;