import React, {Fragment, useRef} from 'react';
import {Link} from "react-router-dom";
import {BiCopyright} from "react-icons/bi";
import {CiFacebook, CiLinkedin, CiPhone, CiTwitter} from "react-icons/ci";
import {ErrorToast, IsEmail, IsEmpty} from "../../helper/FormHelper";
import {LoginRequest} from "../../APIRequest/APIRequest";

const Login = () => {

    let emailRef,passwordRef= useRef();

    const SubmitLogin= () =>{
        let email=  emailRef.value;
        let password = passwordRef.value;

        if(!IsEmail(email)){
            ErrorToast("Valid email Address Required !!!")

        }
        else if(IsEmpty(password)){
            ErrorToast("Password Needed")


        } else

        {
            LoginRequest(email, password).then((result)=>{
                if (result===true){
                    window.location.href="/";
                }
            }
            )

        }

    }

    return (
        <Fragment>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-6 center-screen">
                        <div className="card w-90  p-4">
                            <div className="card-body">
                                <h4>SIGN IN</h4>
                                <br/>
                                <input ref={(input)=>emailRef=input} placeholder="User Email" className="form-control animated fadeInUp" type="email"/>
                                <br/>
                                <input ref={(input)=>passwordRef=input} placeholder="User Password" className="form-control animated fadeInUp" type="password"/>
                                <br/>
                                <button onClick={SubmitLogin} className="btn w-100 animated fadeInUp float-end btn-primary">Next</button>
                                <hr/>
                                <div className="float-end mt-3">

                                    <span>
                                        <Link className="text-center ms-3 h6 animated fadeInUp" to="/Registration">Sign Up </Link>
                                        <span className="ms-1">|</span>
                                        <Link className="text-center ms-3 h6 animated fadeInUp" to="/SendOTP">Forget Password</Link>
                                    </span>
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
export default Login;