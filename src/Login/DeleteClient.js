import React, { useEffect, useState } from 'react'
import studentstyles from "./student.module.css";
import axios from "axios";
import { NavLink } from 'react-router-dom';


const DeleteClient = () => {
    const[client,setClient]=useState([]);
    useEffect(()=>{
  axios.get('http://localhost:4000/client')
  .then(res=>{
    setClient(res.data)
  })
  .catch((err)=>{
    console.log(err);
  });
    });

    const deleteData=(id)=>{
        //alert(id);
        axios.delete(`http://localhost:4000/client/${id}`)
        .then((res)=>{
            alert("Data deleted succ...");
          })
          .catch((err)=>{
            alert("unable to delete");
          });
    
      }

  return (
    <>
    <section className={studentstyles.subbanner}>
    <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <div className='text-center'><h4>Delete Employee</h4>
                    </div>
                    <ul className='d-flex justify-content-center breadcrumb'>
                        <li className='breadcrumb-item'><NavLink to="/">Home</NavLink></li>
                        <li className='breadcrumb-item'><NavLink to="/addclient">Delete Employee</NavLink></li>
                    </ul>
                </div>
            </div>
    </div>
    </section>
<div className={`{$studentstyles.addstudent} my-5`}>
    <div className='container my-5'>
            <div className='row'>
                <div className='col-md-12'>
               <div className="table-responsive">
                <table className='table table-bordered'>
                  <thead className='table-info'>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Gstin</th>
                    <th>username</th>
                    <th>password</th>
                    <th>Operations</th>

                    <th></th>
                  </tr>
                  </thead>
                  <tbody>
                    {
                      client.map((clnt)=>{
                        return(
                          <tr>
                          <td>{clnt.name}</td>
                          <td>{clnt.email}</td>
                          <td>{clnt.phone}</td>
                          <td>{clnt.gstin}</td>
                          <td>{clnt.username}</td>
                          <td>{clnt.password}</td>

                          <td>
                            <button className='btn btn-danger me-3' onClick={()=>deleteData(clnt._id)}>Delete</button>
                            <NavLink to={`/editclient/${clnt._id}`}>
                                <button className='btn btn-warning'>Update</button>
                            </NavLink> 
                          </td>
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

export default DeleteClient;