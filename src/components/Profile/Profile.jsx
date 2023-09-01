import React, {useEffect, useRef} from 'react';
import {GetProfileDetails, ProfileUpdateRequest} from "../../APIRequest/APIRequest";
import {useSelector} from "react-redux";
import {ErrorToast, getBase64, IsEmail, IsEmpty, IsMobile} from "../../helper/FormHelper";
import {useNavigate} from "react-router-dom";

const Profile = () => {

    //data get start
    useEffect(()=>{
        GetProfileDetails();
    },[])

    const ProfileData= useSelector((state)=>state.profile.value);

    const PreviewImage= ()=>{
        let ImgFile= userImgRef.files[0];
        getBase64(ImgFile).then((base64Img)=>{
            userImgView.src=base64Img;
        })
    }

   let navigate=useNavigate();


    //data show end


    // update start
    let emailRef,firstNameRef,lastNameRef,mobileRef,passwordRef, userImgRef, userImgView = useRef();

  const UpdateMyProfile=()=>{
      let email=emailRef.value;
      let firstName=firstNameRef.value;
      let lastName= lastNameRef.value;
      let mobile= mobileRef.value;
      let password= passwordRef.value;
      let photo= userImgView.src;

      // if (IsEmail(email)){
      //     ErrorToast("Valid email needed")
      // }
       if (IsEmpty(firstName)){
          ErrorToast("First name needed")
      }
      else if (IsEmpty(lastName)){
          ErrorToast("Last name needed")
      }
      else if (!IsMobile(mobile)){
          ErrorToast("Valid phone number needed")
      }
      else if (IsEmpty(password)){
          ErrorToast("Valid Password needed")
      }
      else{
          ProfileUpdateRequest(email,firstName,lastName,mobile,password,photo).then((result)=>{
              if(result===true){
                 navigate('/')
              }
          })
      }


  }


    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <div className="container-fluid">
                                <img ref={(input)=>userImgView=input}  className="icon-nav-img-lg" src= {ProfileData['photo']} alt="Profile Photo"/>
                                <hr/>
                                <div className="row">
                                    <div className="col-4 p-2">
                                        <label>Profile Picture</label>
                                        <input onChange={PreviewImage} className="form-control animated fadeInUp" ref={(input)=>userImgRef=input} type="file"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>Email Address</label>
                                        <input key={Date.now()} readOnly={true} defaultValue={ProfileData['email']} placeholder="User Email" className="form-control animated fadeInUp"  ref={(input)=>emailRef=input}type="email"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>First Name</label>
                                        <input key={Date.now()} defaultValue={ProfileData['firstName']} placeholder="First Name" className="form-control animated fadeInUp" ref={(input)=>firstNameRef=input} type="text"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>Last Name</label>
                                        <input key={Date.now()} defaultValue={ProfileData['lastName']} placeholder="Last Name" className="form-control animated fadeInUp"ref={(input)=>lastNameRef=input} type="text"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>Mobile</label>
                                        <input key={Date.now()} defaultValue={ProfileData['mobile']} placeholder="Mobile" className="form-control animated fadeInUp" ref={(input)=>mobileRef=input} type="mobile"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <label>Password</label>
                                        <input key={Date.now()} defaultValue={ProfileData['password']} placeholder="User Password" className="form-control animated fadeInUp" ref={(input)=>passwordRef=input} type="password"/>
                                    </div>
                                    <div className="col-4 p-2">
                                        <button onClick={UpdateMyProfile} className="btn w-100 float-end btn-primary animated fadeInUp">Update Profile</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;