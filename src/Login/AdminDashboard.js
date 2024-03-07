import React, { useState } from 'react';
import studentstyles from "./student.module.css";
import axios from "axios";
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';

const AdminDashboard = () => {
   
  return (
    <>
    <section className={studentstyles.subbanner}>
    <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='text-center'><h4>Admin Dashboard</h4>
                    </div>
                    <ul className='d-flex justify-content-center breadcrumb'>
                        <li className='breadcrumb-item'><NavLink to="/">Home</NavLink></li>
                        <li className='breadcrumb-item'><NavLink to="/admindashboard">Admin Dashboard</NavLink></li>
                    </ul>
                </div>
            </div>
    </div>
    </section>
    <div className={studentstyles.addstudent}>
    <div className='container my-5'>
            <div className='row'>
                <div className='col-md-3'>
               <Sidebar/>
                </div>
                <div className='col-md-9'>
                 <Outlet/>
                </div>
                </div>
                </div>
    </div>
        
    </>
  )
}

export default AdminDashboard;