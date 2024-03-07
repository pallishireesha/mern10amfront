import { Navigate, useNavigate, useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import studentstyles from "./student.module.css";
import axios from "axios";
import { NavLink } from 'react-router-dom';

const EditClient = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [gstin,setGstin] = useState('');
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const {sno} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        axios
        .get(`http://localhost:4000/client/${sno}`)
        .then((res)=>{
        setName(res.data.name);
        setEmail(res.data.email);
        setPhone(res.data.phone);
        setGstin(res.data.gstin);
        setUsername(res.data.username);
        setPassword(res.data.password);

        })
        .catch((err)=>{
            console.log(err);
        });
    },[]);

    const submitHandler=(e)=>{
        e.preventDefault();
        axios.put(`http://localhost:4000/client/${sno}`,{name,email,phone,gstin,username,password})
        .then((res)=>{
           alert("Data Updated succ..");
           navigate("/clientdata");
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
                        <li className='breadcrumb-item'><NavLink to="/addclient">EditClient</NavLink></li>
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
                        <input type='text' name='gstin' placeholder='gstin' required className='form-control' value={gstin} onChange={(e)=>setGstin(e.target.value)}/>
                    </div>
                    <div>
                        <input type='text' name='username' placeholder='username' required className='form-control' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                    </div>
                    <div>
                        <input type='text' name='password' placeholder='password' required className='form-control' value={password} onChange={(e)=>setPassword(e.target.value)}/>
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

export default EditClient;