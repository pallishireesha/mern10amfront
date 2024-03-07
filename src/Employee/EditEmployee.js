import { Navigate, useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import studentstyles from "./student.module.css";
import axios from "axios";
import { NavLink } from 'react-router-dom';

const EditEmployee = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [address,setAddress] = useState('');
    const {sno} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios
        .get(`https://mern10ambackend.onrender.com/employee/${sno}`)
        .then((res)=>{
        setName(res.data.name);
        setEmail(res.data.email);
        setPhone(res.data.phone);
        setAddress(res.data.address);
        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);

    const submitHandler=(e)=>{
        e.preventDefault();
        axios.put(`https://mern10ambackend.onrender.com/employee/${sno}`,{name,email,phone,address})
        .then((res)=>{
           alert("Data Updated succ..");
           navigate("/");
            })
            .catch((err)=>{
                alert("Unable to Update");
            });

    };

  return (
    <>
    <section className={studentstyles.subbanner}>
    <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='text-center'><h4>Edit student</h4>
                    </div>
                    <ul className='d-flex justify-content-center breadcrumb'>
                        <li className='breadcrumb-item'><NavLink to="/">Home</NavLink></li>
                        <li className='breadcrumb-item'><NavLink to="/addemployee">EditEmployee</NavLink></li>
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
                        <input type='text' name='address' placeholder='address' required className='form-control' value={address} onChange={(e)=>setAddress(e.target.value)}/>
                    </div>
                    <div>
                        <input type='submit' className='btn btn-primary' value="Update Student"/>
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

export default EditEmployee;