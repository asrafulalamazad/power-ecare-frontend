import React, {Fragment, useRef} from 'react';
import {Link, useNavigate} from "react-router-dom";
import { Navigate } from "react-router-dom";
import {BiCopyright} from "react-icons/bi";
import {CiFacebook, CiLinkedin, CiPhone, CiTwitter} from "react-icons/ci";

import {ErrorToast, IsEmail, IsEmpty, IsMobile, SuccessToast} from "../../helper/FormHelper";
import {RegistrationRequest} from "../../APIRequest/APIRequest";



const Registration = () => {

    let emailRef,firstNameRef, lastNameRef,mobileRef,passwordRef= useRef();
    let navigate=useNavigate();

    const onRegistration =()=> {

           let email=  emailRef.value;
           let firstName= firstNameRef.value;
           let lastName= lastNameRef.value;
           let mobile=  mobileRef.value;
           let password = passwordRef.value;
           let photo="data:image/png;base64,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"


        if(!IsEmail(email)){
               ErrorToast("Valid email Address Required !!!")
           }
            else if(IsEmpty(firstName)){
                ErrorToast("First Name Needed!")
            }
           else if(IsEmpty(lastName)){
                ErrorToast("Last Name Needed!")
            }
           else if(!IsMobile(mobile)){
                ErrorToast("Bangladeshi Phone NO Needed")
            }
           else if(IsEmpty(password)){
                ErrorToast("Password Needed")
            }
            else{
                RegistrationRequest(email,firstName,lastName,mobile,password,photo).then((result)=>{
                    if(result===true){
                        navigate("/login")
                    }
                })
            }
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row  justify-content-center">
                    <div className="col-md-10 col-lg-10 center-screen">
                        <div className="card animated fadeIn w-100 p-3">
                            <div className="card-body">
                                <h4>Sign Up</h4>
                                <hr/>
                                <div className="container-fluid m-0 p-0">
                                    <div className="row m-0 p-0">
                                        <div className="col-md-4 p-2">
                                            <label>Email Address</label>
                                            <input ref={(input)=>emailRef=input}   placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                        </div>
                                        <div className="col-md-4 p-2">
                                            <label>First Name</label>
                                            <input ref={(input)=>firstNameRef=input} placeholder="First Name" className="form-control animated fadeInUp" type="text"/>
                                        </div>
                                        <div className="col-md-4 p-2">
                                            <label>Last Name</label>
                                            <input ref={(input)=>lastNameRef=input} placeholder="Last Name" className="form-control animated fadeInUp" type="text"/>
                                        </div>
                                        <div className="col-md-4 p-2">
                                            <label>Mobile Number</label>
                                            <input ref={(input)=>mobileRef=input} placeholder="Mobile" className="form-control animated fadeInUp" type="mobile"/>
                                        </div>
                                        <div className="col-md-4 p-2">
                                            <label>Password</label>
                                            <input ref={(input)=>passwordRef=input} placeholder="User Password" className="form-control animated fadeInUp" type="password"/>
                                        </div>

                                    </div>
                                        <div className="row mt-2 p-0">
                                            <div className="col-md-4 p-2">
                                                <button onClick={onRegistration}  className="btn mt-3 w-100 float-end btn-primary animated fadeInUp">Sign Up</button>
                                                </div>
                                        </div>

                                </div>


                            </div>
                            <span className="d-flex justify-content-between">
                                         <Link className="text-center text-bold ms-3  animated fadeInUp" to="https://www.facebook.com/asrafulalamazaad/"> <BiCopyright/>  ASRAFUL ALAM AZAD </Link>
                                        <span className="h5 text-dark">
                                            <Link className="text-center ms-3  animated fadeInUp" to="https://www.facebook.com/asrafulalamazaad/"><CiFacebook/> </Link>
                                            {/*<span className="ms-1">|</span>*/}
                                            <Link className="text-center ms-3  animated fadeInUp" to="https://www.twitter.com/asraful1988/"><CiTwitter/> </Link>
                                            {/*<span className="ms-1">|</span>*/}
                                            <Link className="text-center ms-3  animated fadeInUp" to="https://www.Linkedin.com/asrafulalamazaad/"><CiLinkedin/> </Link>
                                            <Link className="text-center ms-3  animated fadeInUp" to="/contact"><CiPhone/> </Link>
                                        </span>
                            </span>
                        </div>

                    </div>

                </div>

            </div>

        </Fragment>

    );
};

export default Registration;