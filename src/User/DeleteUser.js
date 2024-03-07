import React, { useEffect, useState } from 'react'
import studentstyles from "./student.module.css";
import axios from "axios";
import { NavLink } from 'react-router-dom';


const DeleteUser = () => {
    const[user,setUser]=useState([]);
    useEffect(()=>{
  axios.get('http://localhost:4000/user')
  .then(res=>{
    setUser(res.data)
  })
  .catch((err)=>{
    console.log(err);
  });
    });

    const deleteData=(id)=>{
        //alert(id);
        axios.delete(`http://localhost:4000/user/${id}`)
        .then((res)=>{
            alert("Data deleted succ...");
          })
          .catch((err)=>{
            alert("unable to delete");
          });
    
      }

  return (
    <>
    
<div className={`{$studentstyles.addstudent} `}>
    <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
               <div className="table-responsive">
                <table className='table table-bordered'>
                  <thead className='table-info'>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th></th>
                  </tr>
                  </thead>
                  <tbody>
                    {
                      user.map((stu)=>{
                        return(
                          <tr>
                          <td>{stu.id}</td>
                          <td>{stu.name}</td>
                          <td>{stu.address}</td>
                          <td>
                            <button className='btn btn-danger me-3' onClick={()=>deleteData(stu.id)}>Delete</button>
                            <NavLink to={`/editstudent/${stu.id}`}>
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

export default DeleteUser;