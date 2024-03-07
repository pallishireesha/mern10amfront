import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StudentData from './Student/StudentData'
import AddStudent from './Student/AddStudent'
import DeleteStudent from './Student/DeleteStudent'
import EditStudent from './Student/EditStudent'
import EmployeeData from './Employee/EmployeeData'
import AddEmployee from './Employee/AddEmployee'
import EditEmployee from './Employee/EditEmployee'
import DeleteEmployee from './Employee/DeleteEmployee'
import AddClient from './client/AddClient'
import DeleteClient from './client/DeleteClient'
import EditClient from './client/EditClient'
import ClientData from './client/ClientData'
import Home from './public/Home'
import Signup from './Login/Signup'
import Login from './Login/Login'
import AdminDashboard from './Login/AdminDashboard'
import StudentDatafront from './Student/StudentDatafront'
import GstInterest from './gstinterest/GstInterest'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import AddUser from './User/AddUser'
import UserData from './User/UserData'
import DeleteUser from './User/DeleteUser'
import SignupSql from './Login/SignupSql'
import LoginSql from './Login/LoginSql'
import InterestCalculator from './gstinterest/InterestCalculator'
const Routing = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/addstudent' element={<AddStudent/>}/>
        <Route path='/deletestudent' element={<DeleteStudent/>}/>
        <Route path='/editstudent/:sno' element={<EditStudent/>}/>
        <Route path='/employeedata' element={<EmployeeData/>}/>
        <Route path='/addemployee' element={<AddEmployee/>}/>
        <Route path='/deleteemployee' element={<DeleteEmployee/>}/>
        <Route path='/editemployee/:sno' element={<EditEmployee/>}/>
        <Route path='/clientdata' element={<ClientData/>}/>
        <Route path='/addclient' element={<AddClient/>}/>
        <Route path='/deleteclient' element={<DeleteClient/>}/>
        <Route path='/editclient/:sno' element={<EditClient/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/adminlogin' element={<Login/>}/>
        <Route path='/admindashboard' element={<AdminDashboard/>}>
          <Route path='' element={<AddStudent/>}/>
          <Route path='studentdata' element={<StudentData/>}/>
          <Route path='deletestudent' element={<DeleteStudent/>}/>

        </Route>
        <Route path='/studentdatafront' element={<StudentDatafront/>}/>
        <Route path='/gstinterestcalculator' element={<GstInterest/>}/>
        <Route path='/adduser' element={<AddUser/>}/>
        <Route path='/adduser' element={<AddUser/>}/>
        <Route path='/userdata' element={<UserData/>}/>
        <Route path='/deleteuser' element={<DeleteUser/>}/>
        <Route path='/signupsql' element={<SignupSql/>}/>
        <Route path='/loginsql' element={<LoginSql/>}/>
        <Route path='/interestcalculator' element={<InterestCalculator/>}/>
    </Routes>

    </>
  )
}

export default Routing