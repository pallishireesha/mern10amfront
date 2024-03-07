import React, { useEffect, useState } from 'react'
import studentstyles from "../Student/student.module.css";
import axios, { formToJSON } from "axios";

import { NavLink } from 'react-router-dom';

import {interestAmount,interestAmount1} from "./Interest";

const GstInterest = () => {

    return (
    <>
    <section className={studentstyles.subbanner}>
    <div className='container '>
            <div className='row '>
                <div className='col-md-12'>
                    <div className='text-center'><h4>Home</h4>
                    </div>
                    <ul className='d-flex justify-content-center breadcrumb'>
                        <li className='breadcrumb-item'><NavLink to="/">Home</NavLink></li>
                        <li className='breadcrumb-item'><NavLink to="/addstudent">GstInterest Calculator</NavLink></li>
                    </ul>
                </div>
            </div>
    </div>
    </section>

    <div>

    <section>
                <div class="m-2 p-2">
                    <h1>GST Interest Calculator</h1>
                      <ul class="nav nav-tabs bg-secondary" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                          <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="201718" aria-selected="true">Calculator For 2017-18</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="201819" aria-selected="false">Calculator For 2018-19</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="201920" aria-selected="false">Calculator For 2019-20</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="years-tab" data-bs-toggle="tab" data-bs-target="#years" type="button" role="tab" aria-controls="202021" aria-selected="false">Calculator For 2020-21</button>
                        </li>
                        <li class="nav-item" role="presentation">
                          <button class="nav-link" id="years202122-tab" data-bs-toggle="tab" data-bs-target="#years202122" type="button" role="tab" aria-controls="202122" aria-selected="false">Calculator For 2021-22</button>
                        </li>
                      </ul>
                      
                      <div class="tab-content">
                        <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab"> <h1>GST Tax Interest Calculator for 2017-18</h1>
                <div class="table-responsive">
                <table class="table table-bordered" >
                <thead>
                <tr>
                <th scope="col">-</th>
                <th scope="col">Month</th>
                <th scope="col">Due Date(considering Extension If Any)</th>
                <th scope="col">Filed On (mm-dd-yyyy)</th>
                <th scope="col">No Of Days Delay</th>
                <th scope="col">CGST Amount</th>
                <th scope="col">CGST Interest @ 18%</th>
                <th scope="col">SGST Amount</th>
                <th scope="col">SGST Interest @ 18%</th>
                <th scope="col">IGST Amount</th>
                <th scope="col">IGST Interest @ 18%</th>
                <th scope="col">Total Amount</th>
                <th scope="col">Total Interest @ 18%</th>
                <th scope="col">Related Notification</th>
                </tr>
                <tr>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>8</th>
                <th>9</th>
                <th>10</th>
                <th>11</th>
                <th>12</th>
                <th>13</th>
                <th>14</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <th rowspan="9" scope="row">2<br />0<br />1<br />7<br />-<br />1<br />8</th>
                <td>Jul-17</td>
                <td id="duedate">25-08-2017</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" action="" id="dateoffiling" onchange={interestAmount}/></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydays">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamount" onchange={interestAmount}/></td>
                <td class="ng-binding" id="cgstinterest">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamount" onchange={interestAmount}/></td>
                <td class="ng-binding" id="sgstinterest">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamount" onchange={interestAmount}/></td>
                <td class="ng-binding" id="igstinterest">0</td>
                <td class="ng-binding" id="totalamount">0</td>
                <td class="ng-binding" id="totalinterest">0</td>
                <td>(1) 21/2017 CT-08.08.2017 (2) 24/2017 CT-21.08.2017</td>
                </tr>
                <tr>
                <td>Aug-17</td>
                <td id="duedate1">20-09-2017</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" action="" id="dateoffiling1" onchange={interestAmount1}/></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydays1">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamount1" onchange={interestAmount1}/></td>
                <td class="ng-binding" id="cgstinterest1">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamount1" onchange={interestAmount1}/></td>
                <td class="ng-binding" id="sgstinterest1">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamount1" onchange={interestAmount1}/></td>
                <td class="ng-binding" id="igstinterest1">0</td>
                <td class="ng-binding" id="totalamount1">0</td>
                <td class="ng-binding" id="totalinterest1">0</td>
                <td>21/2017 CT - 08.08.2017</td>
                </tr>
                <tr>
                <td>Sep-17</td>
                <td id="duedatesep17">20-10-2017</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingsep17"  onchange="interestAmountsep17()"/></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydayssep17">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountsep17" onchange="interestAmountsep17(), total()"/></td>
                <td class="ng-binding" id="cgstinterestsep17">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountsep17" onchange="interestAmountsep17(), total()"/></td>
                <td class="ng-binding" id="sgstinterestsep17">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountsep17" onchange="interestAmountsep17(), total()"/></td>
                <td class="ng-binding" id="igstinterestsep17">0</td>
                <td class="ng-binding" id="totalamountsep17">0</td>
                <td class="ng-binding" id="totalinterestsep17">0</td>
                <td>35/2017 CT - 15.09.2017</td>
                </tr>
                <tr>
                <td>Oct-17</td>
                <td id="duedateoct17">20-11-2017</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingoct17"  onchange="interestAmountoct17()"/></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysoct17">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountoct17" onchange="interestAmountoct17(), total()"/></td>
                <td class="ng-binding" id="cgstinterestoct17">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountoct17" onchange="interestAmountoct17(), total()"/></td>
                <td class="ng-binding" id="sgstinterestoct17">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountoct17" onchange="interestAmountoct17(), total()"/></td>
                <td class="ng-binding" id="igstinterestoct17">0</td>
                <td class="ng-binding" id="totalamountoct17">0</td>
                <td class="ng-binding" id="totalinterestoct17">0</td>
                <td>35/2017 CT - 15.09.2017</td>
                </tr>
                <tr>
                <td>Nov-17</td>
                <td id="duedatenov17">20-12-2017</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingnov17"  onchange="interestAmountnov17()"/></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysnov17">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountnov17" onchange="interestAmountnov17(), total()"/></td>
                <td class="ng-binding" id="cgstinterestnov17">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountnov17" onchange="interestAmountnov17(), total()"/></td>
                <td class="ng-binding" id="sgstinterestnov17">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountnov17" onchange="interestAmountnov17(), total()"/></td>
                <td class="ng-binding" id="igstinterestnov17">0</td>
                <td class="ng-binding" id="totalamountnov17">0</td>
                <td class="ng-binding" id="totalinterestnov17">0</td>
                <td>35/2017 CT - 15.09.2017</td>
                </tr>
                <tr>
                <td>Dec-17</td>
                <td id="duedatedec17">22-01-2018</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date"id="dateoffilingdec17"  onchange="interestAmountdec17()"/></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysdec17">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountdec17" onchange="interestAmountdec17(), total()"/></td>
                <td class="ng-binding" id="cgstinterestdec17">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountdec17" onchange="interestAmountdec17(), total()"/></td>
                <td class="ng-binding" id="sgstinterestdec17">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountdec17" onchange="interestAmountdec17(), total()"/></td>
                <td class="ng-binding" id="igstinterestdec17">0</td>
                <td class="ng-binding" id="totalamountdec17">0</td>
                <td class="ng-binding" id="totalinterestdec17">0</td>
                <td>(1) 35/2017 CT-15.09.2017 (2)02/2018 CT-20.01.2018</td>
                </tr>
                <tr>
                <td>Jan-18</td>
                <td id="duedatejan18">20-02-2018</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date"id="dateoffilingjan18"  onchange="interestAmountjan18()"/></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysjan18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountjan18" onchange="interestAmountjan18(), total()"/></td>
                <td class="ng-binding" id="cgstinterestjan18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountjan18" onchange="interestAmountjan18(), total()"/></td>
                <td class="ng-binding" id="sgstinterestjan18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountjan18" onchange="interestAmountjan18(), total()"/></td>
                <td class="ng-binding" id="igstinterestjan18">0</td>
                <td class="ng-binding" id="totalamountjan18">0</td>
                <td class="ng-binding" id="totalinterestjan18">0</td>
                <td>56/2017 CT-15.11.2017</td>
                </tr>
                <tr>
                <td>Feb-18</td>
                <td id="duedatefeb18">20-03-2018</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingfeb18"  onchange="interestAmountfeb18()"/></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysfeb18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountfeb18" onchange="interestAmountfeb18(), total()"/></td>
                <td class="ng-binding" id="cgstinterestfeb18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountfeb18" onchange="interestAmountfeb18(), total()"/></td>
                <td class="ng-binding" id="sgstinterestfeb18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountfeb18" onchange="interestAmountfeb18(), total()"/></td>
                <td class="ng-binding" id="igstinterestfeb18">0</td>
                <td class="ng-binding" id="totalamountfeb18">0</td>
                <td class="ng-binding" id="totalinterestfeb18">0</td>
                <td>56/2017 CT-15.11.2017</td>
                </tr>
                <tr>
                <td>Mar-18</td>
                <td id="duedatemarch18">20-04-2018</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingmarch18"  onchange="interestAmountmarch18()"/></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysmarch18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountmarch18" onchange="interestAmountmarch18(), total()"/></td>
                <td class="ng-binding" id="cgstinterestmarch18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountmarch18" onchange="interestAmountmarch18(), total()"/></td>
                <td class="ng-binding" id="sgstinterestmarch18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountmarch18" onchange="interestAmountmarch18(), total()"/></td>
                <td class="ng-binding" id="igstinterestmarch18">0</td>
                <td class="ng-binding" id="totalamountmarch18">0</td>
                <td class="ng-binding" id="totalinterestmarch18">0</td>
                <td>56/2017 CT-15.11.2017</td>
                </tr>
                <tr>
                <th scope="row">&nbsp;</th>
                <td colspan="3">
                <h4>Total</h4>
                </td>
                <td>&nbsp;</td>
                <td >
                <h4 class="ng-binding" id="totalcgstamount">0</h4>
                </td>
                <td>
                <h4 class="ng-binding" id="totalcgstinterest">0</h4>
                </td>
                <td>
                <h4 class="ng-binding" id="totalsgstamount">0</h4>
                </td>
                <td>
                <h4 class="ng-binding" id="totalsgstinterest">0</h4>
                </td>
                <td>
                <h4 class="ng-binding" id="totaligstamount">0</h4>
                </td>
                <td>
                <h4 class="ng-binding" id="totaligstinterest">0</h4>
                </td>
                <td>
                <h4 class="ng-binding" id="amounttotal">0</h4>
                </td>
                <td>
                <h4 class="ng-binding" id="interesttotal">0</h4>
                </td>
                </tr>
                </tbody>
                </table>
                </div> 
                <button class="btn btn-danger m-2" >Print / Download  Table</button>
                <button class="btn btn-primary m-2" >Print Result</button>
                <button class="btn btn-secondary m-2" >Print</button>
              </div>
            <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab"> <h1>GST Tax Interest Calculator for 2018-19</h1>
                <div class="table-responsive">
                <table class="table table-bordered">
                <thead>
                <tr>
                <th scope="col">Year</th>
                <th scope="col">Month</th>
                <th scope="col">Due Date(considering Extension If Any)</th>
                <th scope="col">Filed On(mm-dd-yyyy)</th>
                <th scope="col">No Of Days Delay</th>
                <th scope="col">CGST Amount</th>
                <th scope="col">CGST Interest @ 18%</th>
                <th scope="col">SGST Amount</th>
                <th scope="col">SGST Interest @ 18%</th>
                <th scope="col">IGST Amount</th>
                <th scope="col">IGST Interest @ 18%</th>
                <th scope="col">Total Amount</th>
                <th scope="col">Total Interest @ 18%</th>
                <th scope="col">Related Notification</th>
                </tr>
                <tr>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>8</th>
                <th>9</th>
                <th>10</th>
                <th>11</th>
                <th>12</th>
                <th>13</th>
                <th>14</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <th rowspan="12" scope="row">2<br />0<br />1<br />8<br />-<br />1<br />9</th>
                <td>Apr-18</td>
                <td id="duedateapr18">22-05-2018</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingapr18" onchange="interestAmountapr18(), total1819()"  /></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysapr18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountapr18" onchange="interestAmountapr18(), total1819()" /></td>
                <td class="ng-binding" id="cgstinterestapr18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountapr18" onchange="interestAmountapr18(), total1819()" /></td>
                <td class="ng-binding" id="sgstinterestapr18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountapr18" onchange="interestAmountapr18(), total1819()"  /></td>
                <td class="ng-binding" id="igstinterestapr18">0</td>
                <td class="ng-binding" id="totalamountapr18">0</td>
                <td class="ng-binding" id="totalinterestapr18">0</td>
                <td>(1)16/2018 CT-23.03.2018 (2)23/2018 CT-18.05.2018</td>
                </tr>
                <tr>
                <td>May-18</td>
                <td id="duedatemay18">20-06-2018</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingmay18" onchange="interestAmountmay18(), total1819()"  /></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysmay18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountmay18" onchange="interestAmountmay18(), total1819()" /></td>
                <td class="ng-binding" id="cgstinterestmay18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountmay18" onchange="interestAmountmay18(), total1819()" /></td>
                <td class="ng-binding" id="sgstinterestmay18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountmay18" onchange="interestAmountmay18(), total1819()"  /></td>
                <td class="ng-binding" id="igstinterestmay18">0</td>
                <td class="ng-binding" id="totalamountmay18">0</td>
                <td class="ng-binding" id="totalinterestmay18">0</td>
                <td>16/2018 CT-23.03.2018</td>
                </tr>
                <tr>
                <td>Jun-18</td>
                <td id="duedatejune18">20-07-2018</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingjune18" onchange="interestAmountjune18(), total1819()"  /></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysjune18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountjune18" onchange="interestAmountjune18(), total1819()" /></td>
                <td class="ng-binding" id="cgstinterestjune18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountjune18" onchange="interestAmountjune18(), total1819()" /></td>
                <td class="ng-binding" id="sgstinterestjune18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountjune18" onchange="interestAmountjune18(), total1819()"  /></td>
                <td class="ng-binding" id="igstinterestjune18">0</td>
                <td class="ng-binding" id="totalamountjune18">0</td>
                <td class="ng-binding" id="totalinterestjune18">0</td>
                <td>16/2018 CT-23.03.2018</td>
                </tr>
                <tr>
                <td>Jul-18</td>
                <td id="duedatejuly18">24-08-2018</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingjuly18" onchange="interestAmountjuly18(), total1819()"  /></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysjuly18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountjuly18" onchange="interestAmountjuly18(), total1819()" /></td>
                <td class="ng-binding" id="cgstinterestjuly18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountjuly18" onchange="interestAmountjuly18(), total1819()" /></td>
                <td class="ng-binding" id="sgstinterestjuly18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountjuly18" onchange="interestAmountjuly18(), total1819()"  /></td>
                <td class="ng-binding" id="igstinterestjuly18">0</td>
                <td class="ng-binding" id="totalamountjuly18">0</td>
                <td class="ng-binding" id="totalinterestjuly18">0</td>
                <td>(1)34/2018 CT-10.08.2018 (2)35/2018 CT-21.08.2018</td>
                </tr>
                <tr>
                <td>Aug-18</td>
                <td id="duedateaug18">20-09-2018</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingaug18" onchange="interestAmountaug18(), total1819()"  /></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysaug18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountaug18" onchange="interestAmountaug18(), total1819()" /></td>
                <td class="ng-binding" id="cgstinterestaug18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountaug18" onchange="interestAmountaug18(), total1819()" /></td>
                <td class="ng-binding" id="sgstinterestaug18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountaug18" onchange="interestAmountaug18(), total1819()"  /></td>
                <td class="ng-binding" id="igstinterestaug18">0</td>
                <td class="ng-binding" id="totalamountaug18">0</td>
                <td class="ng-binding" id="totalinterestaug18">0</td>
                <td>34/2018 CT-10.08.2018</td>
                </tr>
                <tr>
                <td>Sep-18</td>
                <td id="duedatesep18">25-10-2018</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingsep18" onchange="interestAmountsep18(), total1819()"  /></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydayssep18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountsep18" onchange="interestAmountsep18(), total1819()" /></td>
                <td class="ng-binding" id="cgstinterestsep18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountsep18" onchange="interestAmountsep18(), total1819()" /></td>
                <td class="ng-binding" id="sgstinterestsep18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountsep18" onchange="interestAmountsep18(), total1819()"  /></td>
                <td class="ng-binding" id="igstinterestsep18">0</td>
                <td class="ng-binding" id="totalamountsep18">0</td>
                <td class="ng-binding" id="totalinterestsep18">0</td>
                <td>(1)34/2018 CT-10.08.2018 (2)55/2018 CT-21.08.2018</td>
                </tr>
                <tr>
                <td>Oct-18</td>
                <td id="duedateoct18">20-11-2018</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingoct18" onchange="interestAmountoct18(), total1819()"  /></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysoct18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountoct18" onchange="interestAmountoct18(), total1819()" /></td>
                <td class="ng-binding" id="cgstinterestoct18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountoct18" onchange="interestAmountoct18(), total1819()" /></td>
                <td class="ng-binding" id="sgstinterestoct18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountoct18" onchange="interestAmountoct18(), total1819()"  /></td>
                <td class="ng-binding" id="igstinterestoct18">0</td>
                <td class="ng-binding" id="totalamountoct18">0</td>
                <td class="ng-binding" id="totalinterestoct18">0</td>
                <td>34/2018 CT-10.08.2018</td>
                </tr>
                <tr>
                <td>Nov-18</td>
                <td id="duedatenov18">20-12-2018</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingnov18" onchange="interestAmountnov18(), total1819()"  /></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysnov18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountnov18" onchange="interestAmountnov18(), total1819()" /></td>
                <td class="ng-binding" id="cgstinterestnov18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountnov18" onchange="interestAmountnov18(), total1819()" /></td>
                <td class="ng-binding" id="sgstinterestnov18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountnov18" onchange="interestAmountnov18(), total1819()"  /></td>
                <td class="ng-binding" id="igstinterestnov18">0</td>
                <td class="ng-binding" id="totalamountnov18">0</td>
                <td class="ng-binding" id="totalinterestnov18">0</td>
                <td>34/2018 CT-10.08.2018</td>
                </tr>
                <tr>
                <td>Dec-18</td>
                <td id="duedatedec18">20-01-2019</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingdec18" onchange="interestAmountdec18(), total1819()"  /></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysdec18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountdec18" onchange="interestAmountdec18(), total1819()" /></td>
                <td class="ng-binding" id="cgstinterestdec18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountdec18" onchange="interestAmountdec18(), total1819()" /></td>
                <td class="ng-binding" id="sgstinterestdec18">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountdec18" onchange="interestAmountdec18(), total1819()"  /></td>
                <td class="ng-binding" id="igstinterestdec18">0</td>
                <td class="ng-binding" id="totalamountdec18">0</td>
                <td class="ng-binding" id="totalinterestdec18">0</td>
                <td>34/2018 CT-10.08.2018</td>
                </tr>
                <tr>
                <td>Jan-19</td>
                <td id="duedatejan19">22-02-2019</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingjan19" onchange="interestAmountjan19(), total1819()"  /></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysjan19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountjan19" onchange="interestAmountjan19(), total1819()" /></td>
                <td class="ng-binding" id="cgstinterestjan19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountjan19" onchange="interestAmountjan19(), total1819()" /></td>
                <td class="ng-binding" id="sgstinterestjan19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountjan19" onchange="interestAmountjan19(), total1819()"  /></td>
                <td class="ng-binding" id="igstinterestjan19">0</td>
                <td class="ng-binding" id="totalamountjan19">0</td>
                <td class="ng-binding" id="totalinterestjan19">0</td>
                <td>(1)34/2018 CT-10.08.2018 (2)09/2019 CT-20.02.2019</td>
                </tr>
                <tr>
                <td>Feb-19</td>
                <td id="duedatefeb19">20-03-2019</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingfeb19" onchange="interestAmountfeb19(), total1819()"  /></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysfeb19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountfeb19" onchange="interestAmountfeb19(), total1819()" /></td>
                <td class="ng-binding" id="cgstinterestfeb19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountfeb19" onchange="interestAmountfeb19(), total1819()" /></td>
                <td class="ng-binding" id="sgstinterestfeb19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountfeb19" onchange="interestAmountfeb19(), total1819()"  /></td>
                <td class="ng-binding" id="igstinterestfeb19">0</td>
                <td class="ng-binding" id="totalamountfeb19">0</td>
                <td class="ng-binding" id="totalinterestfeb19">0</td>
                <td>34/2018 CT-10.08.2018</td>
                </tr>
                <tr>
                <td>Mar-19</td>
                <td id="duedatemarch19">23-04-2019</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingmarch19" onchange="interestAmountmarch19(), total1819()"  /></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysmarch19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountmarch19" onchange="interestAmountmarch19(), total1819()" /></td>
                <td class="ng-binding" id="cgstinterestmarch19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountmarch19" onchange="interestAmountmarch19(), total1819()" /></td>
                <td class="ng-binding" id="sgstinterestmarch19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountmarch19" onchange="interestAmountmarch19(), total1819()"  /></td>
                <td class="ng-binding" id="igstinterestmarch19">0</td>
                <td class="ng-binding" id="totalamountmarch19">0</td>
                <td class="ng-binding" id="totalinterestmarch19">0</td>
                <td>(1)34/2018 CT-10.08.2018 (2)09/2019 CT-22.04.2019</td>
                </tr>
                <tr>
                <th scope="row">&nbsp;</th>
                <td colspan="3">
                <h4>Total</h4>
                </td>
                <td>&nbsp;</td>
                <td>
                  <h4 class="ng-binding" id="totalcgstamount1819">0</h4>
                </td>
                <td>
                <h4 class="ng-binding" id="totalcgstinterest1819">0</h4>
                </td>
                <td>
                <h4 class="ng-binding" id="totalsgstamount1819">0</h4>
                </td>
                <td>
                <h4 class="ng-binding" id="totalsgstinterest1819">0</h4>
                </td>
                <td>
                <h4 class="ng-binding" id="totaligstamount1819">0</h4>
                </td>
                <td>
                <h4 class="ng-binding" id="totaligstinterest1819">0</h4>
                </td>
                <td>
                <h4 class="ng-binding" id="amounttotal1819">0</h4>
                </td>
                <td>
                <h4 class="ng-binding" id="interesttotal1819">0</h4>
                </td>
                </tr>
                </tbody>
                </table>
                </div> 
                <button class="btn btn-danger" >Print / Download  Table</button>
                <button >Print Result</button>
                <button >Print</button>
              </div>

                <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab"> <h1>GST Tax Interest Calculator for 2019-20</h1>
                <div class="table-responsive">
                <table class="table table-bordered">
                <thead>
                <tr>
                <th scope="col">Year</th>
                <th scope="col">Month</th>
                <th scope="col">Due Date(Considering Extensions If Any)</th>
                <th scope="col">Filed On(mm-dd-yyyy)</th>
                <th scope="col">No Of Days Delay</th>
                <th scope="col">CGST Amount</th>
                <th scope="col">CGST Interest @ 18%</th>
                <th scope="col">SGST Amount</th>
                <th scope="col">SGST Interest @ 18%</th>
                <th scope="col">IGST Amount</th>
                <th scope="col">IGST Interest @ 18%</th>
                <th scope="col">Total Amount</th>
                <th scope="col">Total Interest @ 18%</th>
                <th scope="col">Related Notification</th>
                </tr>
                <tr>
                <th>1</th>
                <th>2</th>
                <th>3</th>
                <th>4</th>
                <th>5</th>
                <th>6</th>
                <th>7</th>
                <th>8</th>
                <th>9</th>
                <th>10</th>
                <th>11</th>
                <th>12</th>
                <th>13</th>
                <th>14</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                <th rowspan="12" scope="row">2<br />0<br />1<br />9<br />-<br />2<br />0</th>
                <td>Apr-19</td>
                <td id="duedateapr19">20-05-2019</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingapr19" onchange="interestAmountapr19(), total1920()"  /></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysapr19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountapr19" onchange="interestAmountapr19(), total1920()" /></td>
                <td class="ng-binding" id="cgstinterestapr19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountapr19" onchange="interestAmountapr19(), total1920()" /></td>
                <td class="ng-binding" id="sgstinterestapr19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountapr19" onchange="interestAmountapr19(), total1920()"  /></td>
                <td class="ng-binding" id="igstinterestapr19">0</td>
                <td class="ng-binding" id="totalamountapr19">0</td>
                <td class="ng-binding" id="totalinterestapr19">0</td>
                <td>13/2019 CT-07.03.2019</td>
                </tr>
                <tr>
                <td>May-19</td>
                <td id="duedatemay19">20-06-2019</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingmay19" onchange="interestAmountmay19(), total1920()"  /></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysmay19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountmay19" onchange="interestAmountmay19(), total1920()" /></td>
                <td class="ng-binding" id="cgstinterestmay19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountmay19" onchange="interestAmountmay19(), total1920()" /></td>
                <td class="ng-binding" id="sgstinterestmay19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountmay19" onchange="interestAmountmay19(), total1920()"  /></td>
                <td class="ng-binding" id="igstinterestmay19">0</td>
                <td class="ng-binding" id="totalamountmay19">0</td>
                <td class="ng-binding" id="totalinterestmay19">0</td>
                <td>13/2019 CT-07.03.2019</td>
                </tr>
                <tr>
                <td>Jun-19</td>
                <td id="duedatejune19">20-07-2019</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingjune19" onchange="interestAmountjune19(), total1920()"  /></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysjune19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountjune19" onchange="interestAmountjune19(), total1920()" /></td>
                <td class="ng-binding" id="cgstinterestjune19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountjune19" onchange="interestAmountjune19(), total1920()" /></td>
                <td class="ng-binding" id="sgstinterestjune19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountjune19" onchange="interestAmountjune19(), total1920()"  /></td>
                <td class="ng-binding" id="igstinterestjune19">0</td>
                <td class="ng-binding" id="totalamountjune19">0</td>
                <td class="ng-binding" id="totalinterestjune19">0</td>
                <td>13/2019 CT-07.03.2019</td>
                </tr>
                <tr>
                <td>Jul-19</td>
                <td id="duedatejuly19">22-08-2019</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingjuly19" onchange="interestAmountjuly19(), total1920()"  /></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysjuly19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountjuly19" onchange="interestAmountjuly19(), total1920()" /></td>
                <td class="ng-binding" id="cgstinterestjuly19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountjuly19" onchange="interestAmountjuly19(), total1920()" /></td>
                <td class="ng-binding" id="sgstinterestjuly19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountjuly19" onchange="interestAmountjuly19(), total1920()"  /></td>
                <td class="ng-binding" id="igstinterestjuly19">0</td>
                <td class="ng-binding" id="totalamountjuly19">0</td>
                <td class="ng-binding" id="totalinterestjuly19">0</td>
                <td>(1)29/2019 CT-28.06.2019 (2)37/2019 CT-21.08.2019</td>
                </tr>
                <tr>
                <td>Aug-19</td>
                <td id="duedateaug19">20-09-2019</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingaug19" onchange="interestAmountaug19(), total1920()"  /></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysaug19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountaug19" onchange="interestAmountaug19(), total1920()" /></td>
                <td class="ng-binding" id="cgstinterestaug19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountaug19" onchange="interestAmountaug19(), total1920()" /></td>
                <td class="ng-binding" id="sgstinterestaug19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountaug19" onchange="interestAmountaug19(), total1920()"  /></td>
                <td class="ng-binding" id="igstinterestaug19">0</td>
                <td class="ng-binding" id="totalamountaug19">0</td>
                <td class="ng-binding" id="totalinterestaug19">0</td>
                <td>29/2019 CT-28.06.2019</td>
                </tr>
                <tr>
                <td>Sep-19</td>
                <td id="duedatesep19">20-10-2019</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingsep19" onchange="interestAmountsep19(), total1920()"  /></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydayssep19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountsep19" onchange="interestAmountsep19(), total1920()" /></td>
                <td class="ng-binding" id="cgstinterestsep19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountsep19" onchange="interestAmountsep19(), total1920()" /></td>
                <td class="ng-binding" id="sgstinterestsep19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountsep19" onchange="interestAmountsep19(), total1920()"  /></td>
                <td class="ng-binding" id="igstinterestsep19">0</td>
                <td class="ng-binding" id="totalamountsep19">0</td>
                <td class="ng-binding" id="totalinterestsep19">0</td>
                <td>29/2019 CT-28.06.2019</td>
                </tr>
                <tr>
                <td>Oct-19</td>
                <td id="duedateoct19">20-11-2019</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingoct19" onchange="interestAmountoct19(), total1920()"  /></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysoct19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountoct19" onchange="interestAmountoct19(), total1920()" /></td>
                <td class="ng-binding" id="cgstinterestoct19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountoct19" onchange="interestAmountoct19(), total1920()" /></td>
                <td class="ng-binding" id="sgstinterestoct19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountoct19" onchange="interestAmountoct19(), total1920()"  /></td>
                <td class="ng-binding" id="igstinterestoct19">0</td>
                <td class="ng-binding" id="totalamountoct19">0</td>
                <td class="ng-binding" id="totalinterestoct19">0</td>
                <td>44/2019 CT-09.10.2019</td>
                </tr>
                <tr>
                <td>Nov-19</td>
                <td id="duedatenov19">23-12-2019</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingnov19" onchange="interestAmountnov19(), total1920()"  /></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysnov19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountnov19" onchange="interestAmountnov19(), total1920()" /></td>
                <td class="ng-binding" id="cgstinterestnov19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountnov19" onchange="interestAmountnov19(), total1920()" /></td>
                <td class="ng-binding" id="sgstinterestnov19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountnov19" onchange="interestAmountnov19(), total1920()"  /></td>
                <td class="ng-binding" id="igstinterestnov19">0</td>
                <td class="ng-binding" id="totalamountnov19">0</td>
                <td class="ng-binding" id="totalinterestnov19">0</td>
                <td>(1)44/2019 CT-09.10.2019 (2) 73/2019 CT-23.12.2019</td>
                </tr>
                <tr>
                <td>Dec-19</td>
                <td id="duedatedec19">20-01-2020</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingdec19" onchange="interestAmountdec19(), total1920()"  /></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysdec19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountdec19" onchange="interestAmountdec19(), total1920()" /></td>
                <td class="ng-binding" id="cgstinterestdec19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountdec19" onchange="interestAmountdec19(), total1920()" /></td>
                <td class="ng-binding" id="sgstinterestdec19">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountdec19" onchange="interestAmountdec19(), total1920()"  /></td>
                <td class="ng-binding" id="igstinterestdec19">0</td>
                <td class="ng-binding" id="totalamountdec19">0</td>
                <td class="ng-binding" id="totalinterestdec19">0</td>
                <td>44/2019 CT-09.10.2019</td>
                </tr>
                <tr>
                <td>Jan-20</td>
                <td id="duedatejan20">22-02-2020</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingjan20" onchange="interestAmountjan20(), total1920()"  /></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysjan20">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountjan20" onchange="interestAmountjan20(), total1920()" /></td>
                <td class="ng-binding" id="cgstinterestjan20">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountjan20" onchange="interestAmountjan20(), total1920()" /></td>
                <td class="ng-binding" id="sgstinterestjan20">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountjan20" onchange="interestAmountjan20(), total1920()"  /></td>
                <td class="ng-binding" id="igstinterestjan20">0</td>
                <td class="ng-binding" id="totalamountjan20">0</td>
                <td class="ng-binding" id="totalinterestjan20">0</td>
                <td>(1)44/2019 CT-09.10.2019 (2) 07/2020 CT-03.02.2020</td>
                </tr>
                <tr>
                <td>Feb-20</td>
                <td id="duedatefeb20">20-03-2020</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingfeb20" onchange="interestAmountfeb20(), total1920()"  /></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysfeb20">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountfeb20" onchange="interestAmountfeb20(), total1920()" /></td>
                <td class="ng-binding" id="cgstinterestfeb20">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountfeb20" onchange="interestAmountfeb20(), total1920()" /></td>
                <td class="ng-binding" id="sgstinterestfeb20">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountfeb20" onchange="interestAmountfeb20(), total1920()"  /></td>
                <td class="ng-binding" id="igstinterestfeb20">0</td>
                <td class="ng-binding" id="totalamountfeb20">0</td>
                <td class="ng-binding" id="totalinterestfeb20">0</td>
                <td>(1)44/2019 CT-09.10.2019 (2) 07/2020 CT-03.02.2020</td>
                </tr>
                <tr>
                <td>Mar20</td>
                <td id="duedatemarch20">20-04-2020</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingmarch20" onchange="interestAmountmarch20(), total1920()"  /></td>
                <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysmarch20">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountmarch20" onchange="interestAmountmarch20(), total1920()" /></td>
                <td class="ng-binding" id="cgstinterestmarch20">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountmarch20" onchange="interestAmountmarch20(), total1920()" /></td>
                <td class="ng-binding" id="sgstinterestmarch20">0</td>
                <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountmarch20" onchange="interestAmountmarch20(), total1920()"  /></td>
                <td class="ng-binding" id="igstinterestmarch20">0</td>
                <td class="ng-binding" id="totalamountmarch20">0</td>
                <td class="ng-binding" id="totalinterestmarch20">0</td>
                <td>(1)44/2019 CT-09.10.2019 (2) 07/2020 CT-03.02.2020</td>
                </tr>
                <tr>
                <th scope="row">&nbsp;</th>
                <td colspan="3">
                <h4>Total</h4>
                </td>
                <td>&nbsp;</td>
                <td>
                  <h4 class="ng-binding" id="totalcgstamount1920">0</h4>
                </td>
                <td>
                <h4 class="ng-binding" id="totalcgstinterest1920">0</h4>
                </td>
                <td>
                <h4 class="ng-binding" id="totalsgstamount1920">0</h4>
                </td>
                <td>
                <h4 class="ng-binding" id="totalsgstinterest1920">0</h4>
                </td>
                <td>
                <h4 class="ng-binding" id="totaligstamount1920">0</h4>
                </td>
                <td>
                <h4 class="ng-binding" id="totaligstinterest1920">0</h4>
                </td>
                <td>
                <h4 class="ng-binding" id="amounttotal1920">0</h4>
                </td>
                <td>
                <h4 class="ng-binding" id="interesttotal1920">0</h4>
                </td>
                </tr>
                </tbody>
                </table>
                </div>
              </div>

                 <div class="tab-pane" id="years" role="tabpanel" aria-labelledby="years-tab"> <h1>GST Tax Interest Calculator for 2020-21</h1>
                  <div class="table-responsive">
                  <table class="table table-bordered">
                  <thead>
                  <tr>
                  <th scope="col">Year</th>
                  <th scope="col">Month</th>
                  <th scope="col">Due Date(Considering Extensions If Any)</th>
                  <th scope="col">Filed On(mm-dd-yyyy)</th>
                  <th scope="col">No Of Days Delay</th>
                  <th scope="col">CGST Amount</th>
                  <th scope="col">CGST Interest @ 18%</th>
                  <th scope="col">SGST Amount</th>
                  <th scope="col">SGST Interest @ 18%</th>
                  <th scope="col">IGST Amount</th>
                  <th scope="col">IGST Interest @ 18%</th>
                  <th scope="col">Total Amount</th>
                  <th scope="col">Total Interest @ 18%</th>
                  <th scope="col">Related Notification</th>
                  </tr>
                  <tr>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>5</th>
                  <th>6</th>
                  <th>7</th>
                  <th>8</th>
                  <th>9</th>
                  <th>10</th>
                  <th>11</th>
                  <th>12</th>
                  <th>13</th>
                  <th>14</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                  <th rowspan="12" scope="row">2<br />0<br />1<br />9<br />-<br />2<br />0</th>
                  <td>Apr-20</td>
                  <td id="duedateapr20">20-05-2020</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingapr20" onchange="interestAmountapr20(), total2021()"  /></td>
                  <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysapr20">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountapr20" onchange="interestAmountapr20(), total2021()" /></td>
                  <td class="ng-binding" id="cgstinterestapr20">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountapr20" onchange="interestAmountapr20(), total2021()" /></td>
                  <td class="ng-binding" id="sgstinterestapr20">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountapr20" onchange="interestAmountapr20(), total2021()"  /></td>
                  <td class="ng-binding" id="igstinterestapr20">0</td>
                  <td class="ng-binding" id="totalamountapr20">0</td>
                  <td class="ng-binding" id="totalinterestapr20">0</td>
                  <td>13/2020 CT-07.03.2020</td>
                  </tr>
                  <tr>
                  <td>May-20</td>
                  <td id="duedatemay20">20-06-2020</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingmay20" onchange="interestAmountmay20(), total2021()"  /></td>
                  <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysmay20">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountmay20" onchange="interestAmountmay20(), total2021()" /></td>
                  <td class="ng-binding" id="cgstinterestmay20">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountmay20" onchange="interestAmountmay20(), total2021()" /></td>
                  <td class="ng-binding" id="sgstinterestmay20">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountmay20" onchange="interestAmountmay20(), total2021()"  /></td>
                  <td class="ng-binding" id="igstinterestmay20">0</td>
                  <td class="ng-binding" id="totalamountmay20">0</td>
                  <td class="ng-binding" id="totalinterestmay20">0</td>
                  <td>13/2020 CT-07.03.2020</td>
                  </tr>
                  <tr>
                  <td>Jun-20</td>
                  <td id="duedatejune20">20-07-2020</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingjune20" onchange="interestAmountjune20(), total2021()"  /></td>
                  <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysjune20">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountjune20" onchange="interestAmountjune20(), total2021()" /></td>
                  <td class="ng-binding" id="cgstinterestjune20">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountjune20" onchange="interestAmountjune20(), total2021()" /></td>
                  <td class="ng-binding" id="sgstinterestjune20">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountjune20" onchange="interestAmountjune20(), total2021()"  /></td>
                  <td class="ng-binding" id="igstinterestjune20">0</td>
                  <td class="ng-binding" id="totalamountjune20">0</td>
                  <td class="ng-binding" id="totalinterestjune20">0</td>
                  <td>13/2020 CT-07.03.2020</td>
                  </tr>
                  <tr>
                  <td>Jul-20</td>
                  <td id="duedatejuly20">22-08-2020</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingjuly20" onchange="interestAmountjuly20(), total2021()"  /></td>
                  <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysjuly20">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountjuly20" onchange="interestAmountjuly20(), total2021()" /></td>
                  <td class="ng-binding" id="cgstinterestjuly20">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountjuly20" onchange="interestAmountjuly20(), total2021()" /></td>
                  <td class="ng-binding" id="sgstinterestjuly20">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountjuly20" onchange="interestAmountjuly20(), total2021()"  /></td>
                  <td class="ng-binding" id="igstinterestjuly20">0</td>
                  <td class="ng-binding" id="totalamountjuly20">0</td>
                  <td class="ng-binding" id="totalinterestjuly20">0</td>
                  <td>(1)29/2020 CT-28.06.2020 (2)37/2020 CT-21.08.2020</td>
                  </tr>
                  <tr>
                  <td>Aug-20</td>
                  <td id="duedateaug20">20-09-2020</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingaug20" onchange="interestAmountaug20(), total2021()"  /></td>
                  <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysaug20">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountaug20" onchange="interestAmountaug20(), total2021()" /></td>
                  <td class="ng-binding" id="cgstinterestaug20">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountaug20" onchange="interestAmountaug20(), total2021()" /></td>
                  <td class="ng-binding" id="sgstinterestaug20">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountaug20" onchange="interestAmountaug20(), total2021()"  /></td>
                  <td class="ng-binding" id="igstinterestaug20">0</td>
                  <td class="ng-binding" id="totalamountaug20">0</td>
                  <td class="ng-binding" id="totalinterestaug20">0</td>
                  <td>29/2020 CT-28.06.2020</td>
                  </tr>
                  <tr>
                  <td>Sep-20</td>
                  <td id="duedatesep20">20-10-2020</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingsep20" onchange="interestAmountsep20(), total2021()"  /></td>
                  <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydayssep20">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountsep20" onchange="interestAmountsep20(), total2021()" /></td>
                  <td class="ng-binding" id="cgstinterestsep20">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountsep20" onchange="interestAmountsep20(), total2021()" /></td>
                  <td class="ng-binding" id="sgstinterestsep20">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountsep20" onchange="interestAmountsep20(), total2021()"  /></td>
                  <td class="ng-binding" id="igstinterestsep20">0</td>
                  <td class="ng-binding" id="totalamountsep20">0</td>
                  <td class="ng-binding" id="totalinterestsep20">0</td>
                  <td>29/2020 CT-28.06.2020</td>
                  </tr>
                  <tr>
                  <td>Oct-20</td>
                  <td id="duedateoct20">20-11-2020</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingoct20" onchange="interestAmountoct20(), total2021()"  /></td>
                  <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysoct20">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountoct20" onchange="interestAmountoct20(), total2021()" /></td>
                  <td class="ng-binding" id="cgstinterestoct20">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountoct20" onchange="interestAmountoct20(), total2021()" /></td>
                  <td class="ng-binding" id="sgstinterestoct20">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountoct20" onchange="interestAmountoct20(), total2021()"  /></td>
                  <td class="ng-binding" id="igstinterestoct20">0</td>
                  <td class="ng-binding" id="totalamountoct20">0</td>
                  <td class="ng-binding" id="totalinterestoct20">0</td>
                  <td>44/2020 CT-09.10.2020</td>
                  </tr>
                  <tr>
                  <td>Nov-20</td>
                  <td id="duedatenov20">23-12-2020</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingnov20" onchange="interestAmountnov20(), total2021()"  /></td>
                  <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysnov20">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountnov20" onchange="interestAmountnov20(), total2021()" /></td>
                  <td class="ng-binding" id="cgstinterestnov20">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountnov20" onchange="interestAmountnov20(), total2021()" /></td>
                  <td class="ng-binding" id="sgstinterestnov20">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountnov20" onchange="interestAmountnov20(), total2021()"  /></td>
                  <td class="ng-binding" id="igstinterestnov20">0</td>
                  <td class="ng-binding" id="totalamountnov20">0</td>
                  <td class="ng-binding" id="totalinterestnov20">0</td>
                  <td>(1)44/2020 CT-09.10.2020 (2) 73/2020 CT-23.12.2020</td>
                  </tr>
                  <tr>
                  <td>Dec-20</td>
                  <td id="duedatedec20">20-01-2020</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingdec20" onchange="interestAmountdec20(), total2021()"  /></td>
                  <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysdec20">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountdec20" onchange="interestAmountdec20(), total2021()" /></td>
                  <td class="ng-binding" id="cgstinterestdec20">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountdec20" onchange="interestAmountdec20(), total2021()" /></td>
                  <td class="ng-binding" id="sgstinterestdec20">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountdec20" onchange="interestAmountdec20(), total2021()"  /></td>
                  <td class="ng-binding" id="igstinterestdec20">0</td>
                  <td class="ng-binding" id="totalamountdec20">0</td>
                  <td class="ng-binding" id="totalinterestdec20">0</td>
                  <td>44/2020 CT-09.10.2020</td>
                  </tr>
                  <tr>
                  <td>Jan-21</td>
                  <td id="duedatejan21">22-02-2021</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingjan21" onchange="interestAmountjan21(), total2021()"  /></td>
                  <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysjan21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountjan21" onchange="interestAmountjan21(), total2021()" /></td>
                  <td class="ng-binding" id="cgstinterestjan21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountjan21" onchange="interestAmountjan21(), total2021()" /></td>
                  <td class="ng-binding" id="sgstinterestjan21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountjan21" onchange="interestAmountjan21(), total2021()"  /></td>
                  <td class="ng-binding" id="igstinterestjan21">0</td>
                  <td class="ng-binding" id="totalamountjan21">0</td>
                  <td class="ng-binding" id="totalinterestjan21">0</td>
                  <td>(1)44/2020 CT-09.10.2020 (2) 07/2020 CT-03.02.2020</td>
                  </tr>
                  <tr>
                  <td>Feb-21</td>
                  <td id="duedatefeb21">20-03-2021</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingfeb21" onchange="interestAmountfeb21(), total2021()"  /></td>
                  <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysfeb21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountfeb21" onchange="interestAmountfeb21(), total2021()" /></td>
                  <td class="ng-binding" id="cgstinterestfeb21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountfeb21" onchange="interestAmountfeb21(), total2021()" /></td>
                  <td class="ng-binding" id="sgstinterestfeb21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountfeb21" onchange="interestAmountfeb21(), total2021()"  /></td>
                  <td class="ng-binding" id="igstinterestfeb21">0</td>
                  <td class="ng-binding" id="totalamountfeb21">0</td>
                  <td class="ng-binding" id="totalinterestfeb21">0</td>
                  <td>(1)44/2020 CT-09.10.2020 (2) 07/2020 CT-03.02.2020</td>
                  </tr>
                  <tr>
                  <td>Mar-21</td>
                  <td id="duedatemarch21">20-04-2021</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingmarch21" onchange="interestAmountmarch21(), total2021()"  /></td>
                  <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysmarch21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountmarch21" onchange="interestAmountmarch21(), total2021()" /></td>
                  <td class="ng-binding" id="cgstinterestmarch21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountmarch21" onchange="interestAmountmarch21(), total2021()" /></td>
                  <td class="ng-binding" id="sgstinterestmarch21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountmarch21" onchange="interestAmountmarch21(), total2021()"  /></td>
                  <td class="ng-binding" id="igstinterestmarch21">0</td>
                  <td class="ng-binding" id="totalamountmarch21">0</td>
                  <td class="ng-binding" id="totalinterestmarch21">0</td>
                  <td>(1)44/2020 CT-09.10.2020 (2) 07/2020 CT-03.02.2020</td>
                  </tr>
                  <tr>
                  <th scope="row">&nbsp;</th>
                  <td colspan="3">
                  <h4>Total</h4>
                  </td>
                  <td>&nbsp;</td>
                  <td>
                    <h4 class="ng-binding" id="totalcgstamount2021">0</h4>
                  </td>
                  <td>
                  <h4 class="ng-binding" id="totalcgstinterest2021">0</h4>
                  </td>
                  <td>
                  <h4 class="ng-binding" id="totalsgstamount2021">0</h4>
                  </td>
                  <td>
                  <h4 class="ng-binding" id="totalsgstinterest2021">0</h4>
                  </td>
                  <td>
                  <h4 class="ng-binding" id="totaligstamount2021">0</h4>
                  </td>
                  <td>
                  <h4 class="ng-binding" id="totaligstinterest2021">0</h4>
                  </td>
                  <td>
                  <h4 class="ng-binding" id="amounttotal2021">0</h4>
                  </td>
                  <td>
                  <h4 class="ng-binding" id="interesttotal2021">0</h4>
                  </td>
                  </tr>
                  </tbody>
                  </table>
                  </div>
   
                </div>
                   
                 <div class="tab-pane" id="years202122" role="tabpanel" aria-labelledby="years202122-tab"> <h1>GST Tax Interest Calculator for 2021-22</h1>
                  <div class="table-responsive">
                  <table class="table table-bordered">
                  <thead>
                  <tr>
                  <th scope="col">Year</th>
                  <th scope="col">Month</th>
                  <th scope="col">Due Date(Considering Extensions If Any)</th>
                  <th scope="col">Filed On(mm-dd-yyyy)</th>
                  <th scope="col">No Of Days Delay</th>
                  <th scope="col">CGST Amount</th>
                  <th scope="col">CGST Interest @ 18%</th>
                  <th scope="col">SGST Amount</th>
                  <th scope="col">SGST Interest @ 18%</th>
                  <th scope="col">IGST Amount</th>
                  <th scope="col">IGST Interest @ 18%</th>
                  <th scope="col">Total Amount</th>
                  <th scope="col">Total Interest @ 18%</th>
                  <th scope="col">Related Notification</th>
                  </tr>
                  <tr>
                  <th>1</th>
                  <th>2</th>
                  <th>3</th>
                  <th>4</th>
                  <th>5</th>
                  <th>6</th>
                  <th>7</th>
                  <th>8</th>
                  <th>9</th>
                  <th>10</th>
                  <th>11</th>
                  <th>12</th>
                  <th>13</th>
                  <th>14</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                  <th rowspan="12" scope="row">2<br />0<br />1<br />9<br />-<br />2<br />0</th>
                  <td>Apr-21</td>
                  <td id="duedateapr21">20-05-2021</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingapr21" onchange="interestAmountapr21(), total2022()"  /></td>
                  <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysapr21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountapr21" onchange="interestAmountapr21(), total2022()" /></td>
                  <td class="ng-binding" id="cgstinterestapr21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountapr21" onchange="interestAmountapr21(), total2022()" /></td>
                  <td class="ng-binding" id="sgstinterestapr21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountapr21" onchange="interestAmountapr21(), total2022()"  /></td>
                  <td class="ng-binding" id="igstinterestapr21">0</td>
                  <td class="ng-binding" id="totalamountapr21">0</td>
                  <td class="ng-binding" id="totalinterestapr21">0</td>
                  <td>13/2020 CT-07.03.2020</td>
                  </tr>
                  <tr>
                  <td>May-21</td>
                  <td id="duedatemay21">20-06-2020</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingmay21" onchange="interestAmountmay21(), total2022()"  /></td>
                  <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysmay21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountmay21" onchange="interestAmountmay21(), total2022()" /></td>
                  <td class="ng-binding" id="cgstinterestmay21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountmay21" onchange="interestAmountmay21(), total2022()" /></td>
                  <td class="ng-binding" id="sgstinterestmay21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountmay21" onchange="interestAmountmay21(), total2022()"  /></td>
                  <td class="ng-binding" id="igstinterestmay21">0</td>
                  <td class="ng-binding" id="totalamountmay21">0</td>
                  <td class="ng-binding" id="totalinterestmay21">0</td>
                  <td>13/2020 CT-07.03.2020</td>
                  </tr>
                  <tr>
                  <td>Jun-21</td>
                  <td id="duedatejune20">20-07-2021</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingjune21" onchange="interestAmountjune21(), total2022()"  /></td>
                  <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysjune21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountjune21" onchange="interestAmountjune21(), total2022()" /></td>
                  <td class="ng-binding" id="cgstinterestjune21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountjune21" onchange="interestAmountjune21(), total2022()" /></td>
                  <td class="ng-binding" id="sgstinterestjune21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountjune21" onchange="interestAmountjune21(), total2022()"  /></td>
                  <td class="ng-binding" id="igstinterestjune21">0</td>
                  <td class="ng-binding" id="totalamountjune21">0</td>
                  <td class="ng-binding" id="totalinterestjune21">0</td>
                  <td>13/2120 CT-07.03.2020</td>
                  </tr>
                  <tr>
                  <td>Jul-21</td>
                  <td id="duedatejuly21">22-08-2020</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingjuly21" onchange="interestAmountjuly21(), total2022()"  /></td>
                  <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysjuly21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountjuly21" onchange="interestAmountjuly21(), total2022()" /></td>
                  <td class="ng-binding" id="cgstinterestjuly21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountjuly21" onchange="interestAmountjuly21(), total2022()" /></td>
                  <td class="ng-binding" id="sgstinterestjuly21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountjuly21" onchange="interestAmountjuly21(), total2022()"  /></td>
                  <td class="ng-binding" id="igstinterestjuly21">0</td>
                  <td class="ng-binding" id="totalamountjuly21">0</td>
                  <td class="ng-binding" id="totalinterestjuly21">0</td>
                  <td>(1)29/2120 CT-28.06.2020 (2)37/2020 CT-22.08.2020</td>
                  </tr>
                  <tr>
                  <td>Aug-21</td>
                  <td id="duedateaug21">20-09-2020</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingaug21" onchange="interestAmountaug21(), total2022()"  /></td>
                  <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysaug21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountaug21" onchange="interestAmountaug21(), total2022()" /></td>
                  <td class="ng-binding" id="cgstinterestaug21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountaug21" onchange="interestAmountaug21(), total2022()" /></td>
                  <td class="ng-binding" id="sgstinterestaug21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountaug21" onchange="interestAmountaug21(), total2022()"  /></td>
                  <td class="ng-binding" id="igstinterestaug21">0</td>
                  <td class="ng-binding" id="totalamountaug21">0</td>
                  <td class="ng-binding" id="totalinterestaug21">0</td>
                  <td>29/2121 CT-28.06.2020</td>
                  </tr>
                  <tr>
                  <td>Sep-21</td>
                  <td id="duedatesep20">20-10-2020</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingsep21" onchange="interestAmountsep21(), total2022()"  /></td>
                  <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydayssep21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountsep21" onchange="interestAmountsep21(), total2022()" /></td>
                  <td class="ng-binding" id="cgstinterestsep21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountsep21" onchange="interestAmountsep21(), total2022()" /></td>
                  <td class="ng-binding" id="sgstinterestsep21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountsep21" onchange="interestAmountsep21(), total2022()"  /></td>
                  <td class="ng-binding" id="igstinterestsep21">0</td>
                  <td class="ng-binding" id="totalamountsep21">0</td>
                  <td class="ng-binding" id="totalinterestsep21">0</td>
                  <td>29/2120 CT-28.06.2020</td>
                  </tr>
                  <tr>
                  <td>Oct-21</td>
                  <td id="duedateoct21">20-11-2020</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingoct21" onchange="interestAmountoct21(), total2022()"  /></td>
                  <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysoct21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountoct21" onchange="interestAmountoct21(), total2022()" /></td>
                  <td class="ng-binding" id="cgstinterestoct21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountoct21" onchange="interestAmountoct21(), total2022()" /></td>
                  <td class="ng-binding" id="sgstinterestoct21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountoct21" onchange="interestAmountoct21(), total2022()"  /></td>
                  <td class="ng-binding" id="igstinterestoct21">0</td>
                  <td class="ng-binding" id="totalamountoct21">0</td>
                  <td class="ng-binding" id="totalinterestoct21">0</td>
                  <td>44/2121 CT-09.10.2020</td>
                  </tr>
                  <tr>
                  <td>Nov-21</td>
                  <td id="duedatenov21">23-12-2020</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingnov21" onchange="interestAmountnov21(), total2022()"  /></td>
                  <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysnov21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountnov21" onchange="interestAmountnov21(), total2022()" /></td>
                  <td class="ng-binding" id="cgstinterestnov21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountnov21" onchange="interestAmountnov21(), total2022()" /></td>
                  <td class="ng-binding" id="sgstinterestnov21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountnov21" onchange="interestAmountnov21(), total2022()"  /></td>
                  <td class="ng-binding" id="igstinterestnov21">0</td>
                  <td class="ng-binding" id="totalamountnov21">0</td>
                  <td class="ng-binding" id="totalinterestnov21">0</td>
                  <td>(1)44/2120 CT-09.10.2020 (2) 73/2020 CT-23.12.2020</td>
                  </tr>
                  <tr>
                  <td>Dec-21</td>
                  <td id="duedatedec21">20-01-2020</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingdec21" onchange="interestAmountdec21(), total2022()"  /></td>
                  <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysdec21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountdec21" onchange="interestAmountdec21(), total2022()" /></td>
                  <td class="ng-binding" id="cgstinterestdec21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountdec21" onchange="interestAmountdec21(), total2022()" /></td>
                  <td class="ng-binding" id="sgstinterestdec21">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountdec21" onchange="interestAmountdec21(), total2022()"  /></td>
                  <td class="ng-binding" id="igstinterestdec21">0</td>
                  <td class="ng-binding" id="totalamountdec21">0</td>
                  <td class="ng-binding" id="totalinterestdec21">0</td>
                  <td>44/2121 CT-09.10.2120</td>
                  </tr>
                  <tr>
                  <td>Jan-22</td>
                  <td id="duedatejan22">22-02-2022</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingjan22" onchange="interestAmountjan22(), total2022()"  /></td>
                  <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysjan22">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountjan22" onchange="interestAmountjan22(), total2022()" /></td>
                  <td class="ng-binding" id="cgstinterestjan22">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountjan22" onchange="interestAmountjan22(), total2022()" /></td>
                  <td class="ng-binding" id="sgstinterestjan22">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountjan22" onchange="interestAmountjan22(), total2022()"  /></td>
                  <td class="ng-binding" id="igstinterestjan22">0</td>
                  <td class="ng-binding" id="totalamountjan22">0</td>
                  <td class="ng-binding" id="totalinterestjan22">0</td>
                  <td>(1)44/2020 CT-09.10.2020 (2) 07/2020 CT-03.02.2020</td>
                  </tr>
                  <tr>
                  <td>Feb-22</td>
                  <td id="duedatefeb22">20-03-2022</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingfeb22" onchange="interestAmountfeb22(), total2022()"  /></td>
                  <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysfeb22">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountfeb22" onchange="interestAmountfeb22(), total2022()" /></td>
                  <td class="ng-binding" id="cgstinterestfeb22">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountfeb22" onchange="interestAmountfeb22(), total2022()" /></td>
                  <td class="ng-binding" id="sgstinterestfeb22">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountfeb22" onchange="interestAmountfeb22(), total2022()"  /></td>
                  <td class="ng-binding" id="igstinterestfeb22">0</td>
                  <td class="ng-binding" id="totalamountfeb22">0</td>
                  <td class="ng-binding" id="totalinterestfeb22">0</td>
                  <td>(1)44/2020 CT-09.10.2020 (2) 07/2020 CT-03.02.2020</td>
                  </tr>
                  <tr>
                  <td>Mar-22</td>
                  <td id="duedatemarch22">20-04-2022</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="date" id="dateoffilingmarch22" onchange="interestAmountmarch22(), total2022()"  /></td>
                  <td class="ng-pristine ng-untouched ng-valid ng-binding" id="delaydaysmarch22">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="cgstamountmarch22" onchange="interestAmountmarch22(), total2022()" /></td>
                  <td class="ng-binding" id="cgstinterestmarch22">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="sgstamountmarch22" onchange="interestAmountmarch22(), total2022()" /></td>
                  <td class="ng-binding" id="sgstinterestmarch22">0</td>
                  <td><input class="form-control ng-pristine ng-untouched ng-valid" type="text" id="igstamountmarch22" onchange="interestAmountmarch22(), total2022()"  /></td>
                  <td class="ng-binding" id="igstinterestmarch22">0</td>
                  <td class="ng-binding" id="totalamountmarch22">0</td>
                  <td class="ng-binding" id="totalinterestmarch22">0</td>
                  <td>(1)44/2020 CT-09.10.2020 (2) 07/2020 CT-03.02.2020</td>
                  </tr>
                  <tr>
                  <th scope="row">&nbsp;</th>
                  <td colspan="3">
                  <h4>Total</h4>
                  </td>
                  <td>&nbsp;</td>
                  <td>
                    <h4 class="ng-binding" id="totalcgstamount2022">0</h4>
                  </td>
                  <td>
                  <h4 class="ng-binding" id="totalcgstinterest2022">0</h4>
                  </td>
                  <td>
                  <h4 class="ng-binding" id="totalsgstamount2022">0</h4>
                  </td>
                  <td>
                  <h4 class="ng-binding" id="totalsgstinterest2022">0</h4>
                  </td>
                  <td>
                  <h4 class="ng-binding" id="totaligstamount2022">0</h4>
                  </td>
                  <td>
                  <h4 class="ng-binding" id="totaligstinterest2022">0</h4>
                  </td>
                  <td>
                  <h4 class="ng-binding" id="amounttotal2022">0</h4>
                  </td>
                  <td>
                  <h4 class="ng-binding" id="interesttotal2022">0</h4>
                  </td>
                  </tr>
                  </tbody>
                  </table>
                  </div>
                  <button class="btn btn-danger" >Print / Download  Table</button>
                  <button >Print Result</button>

                   </div>
                      </div>
                    </div>
                  </section>
    </div>

    </>
  )
}

export default GstInterest;