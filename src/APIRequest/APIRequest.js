import axios from "axios";
import {ErrorToast, SuccessToast} from "../helper/FormHelper";
import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state-slice/setting-slice";
import {setToken, setUserDetails} from "../helper/SessionHelper";
// import React from "react";

const BaseURL="https://task-manager-power-ecare.onrender.com/api/v1"




export function LoginRequest(email,password ){
    store.dispatch(ShowLoader());
    let URL= BaseURL+"/login"
    let  PostBody = {email:email, password:password,}

    return  axios.post(URL,PostBody).then((res)=>{
        if(res.status===200){
            setToken(res.data['token']);
            setUserDetails(res.data['data']);
            SuccessToast("Login Success");
            return true;
        } else {
            ErrorToast("Invalid email or Password")
            return false;
            }
        }).catch((err)=>{

        store.dispatch(HideLoader());
        ErrorToast("Something Wrong")
        return false;
    })



}



export  function RegistrationRequest(email,firstName,lastName,mobile,password,photo) {
    store.dispatch(ShowLoader());
    let URL= BaseURL+"/registration"
    let  PostBody = {email:email, firstName:firstName, lastName:lastName,mobile:mobile,password:password,photo:photo}

   return  axios.post(URL,PostBody).then((res)=>{
       store.dispatch(HideLoader());

        if(res.status===200){
            if (res.data['status']==="fail"){
                if(res.data['data']['keyPattern']['email']===1){
                    ErrorToast("Email Already Exist")
                    return false;
                }
                else{
                    ErrorToast("Something Went Wrong")
                    return false;
                }
            }

        else {

           SuccessToast("Registration Success")
            return true;
         }
        }
    }).catch((err)=>{

       store.dispatch(HideLoader());
       ErrorToast("Something Wrong")
        return false;
    })
}


