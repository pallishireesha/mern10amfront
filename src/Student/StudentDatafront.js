import React, { useEffect, useState } from 'react'
import studentstyles from "./student.module.css";
import axios from "axios";
import { NavLink } from 'react-router-dom';


const StudentDatafront = () => {
  const[student,setStudent]=useState([]);
  useEffect(()=>{
axios.get('https://mern10ambackend.onrender.com/student')
.then(res=>{
  setStudent(res.data)
})
.catch((err)=>{
  console.log(err);
});
  },[]);

  const searchHandler = (e) =>{
let key = e.target.value;
if(key){
  axios.get(`https://mern10ambackend.onrender.com/student/search/${key}`)
.then(res=>{
  setStudent(res.data)
})
.catch((err)=>{
  console.log(err);
});
}

  };

    return (
    <>
    <section className={studentstyles.subbanner}>
    <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='text-center'><h4>Home</h4>
                    </div>
                    <ul className='d-flex justify-content-center breadcrumb'>
                        <li className='breadcrumb-item'><NavLink to="/">Home</NavLink></li>
                        <li className='breadcrumb-item'><NavLink to="/addstudent">Student Data</NavLink></li>
                    </ul>
                </div>
            </div>
    </div>
    </section>
    <div>
      
    </div>
<div className={`{$studentstyles.addstudent} my-5`}>
    <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                
                <div className='clearfix'></div>
                <div className='my-5'>
                  <input type='text' name='search' placeholder='search' onChange={searchHandler}></input>
                </div>
               <div className="table-responsive">
                <table className='table table-bordered'>
                  <thead className='table-info'>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                  </tr>
                  </thead>
                  <tbody>
                    {
                      student.map((stu)=>{
                        return(
                          <tr>
                          <td>{stu.name}</td>
                          <td>{stu.email}</td>
                          <td>{stu.phone}</td>
                          <td>{stu.address}</td>
                          
                          </tr>
                        )})
                    }
                  </tbody>
                </table>
               </div>
                </div>
                </div>
                </div>
    </div>
    </>
  )
}

export default StudentDatafront;