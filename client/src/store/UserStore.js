import axios from "axios";
import { create } from "zustand";
import {setEmail,getEmail,unauthorized} from '../utility/utility'
import Cookies from 'js-cookie'

const UserStore=create((set)=>({

    isLogin:()=>{
        return !!Cookies.get('token');
    },

    LoginFormData:{email:""},
    LoginFormOnChange:(name,value)=>{
        set((state)=>({
            LoginFormData:{
                ...state.LoginFormData,
                [name]:value
            }
        }))
    },

    OTPFormData:{otp:""},
    OTPFormOnChange:(name,value)=>{
        set((state)=>({
            OTPFormData:{
                ...state.OTPFormData,
                [name]:value
            }
        }))
    },

    isFormSubmit:false,

    UserOTPRequest:async(email)=>{
        set({isFormSubmit:true})
        let res = await axios.get(`/api/v1/UserOTP/${email}`);
        setEmail(email);
        set({isFormSubmit:false})
        return res.data['status']==="success";

    },
    VerifyLoginRequest:async(otp)=>{
        set({isFormSubmit:true})
        let email=getEmail();
        let res = await axios.get(`/api/v1/VerifyLogin/${email}/${otp}`);
        set({isFormSubmit:false})
        return res.data['status']==="success";

    },

    UserLogoutRequest:async()=>{
        set({isFormSubmit:true})
        let res=await axios.get(`/api/v1/UserLogout`);
        set({isFormSubmit:false})
        return res.data['status'] === "success";
    },


    ProfileForm:{name:"",event_name:"",event_data:"",event_time:"",location:"",description:""},
    ProfileFormChange:(name,value)=>{
        set((state)=>({
          ProfileForm:{
            ...state.ProfileForm,
            [name]:value
          }
        }))
    },
    ProfileDetails:null,
    ProfileDetailsRequest:async()=>{
        try{
          let res=await axios.get(`/api/v1/ReadProfile`);
          if(res.data['data'].length>0){
            set({ProfileDetails:res.data['data'][0]})
            set({ProfileForm:res.data['data'][0]})
          }else{
            set({ProfileDetails:[]})
          }
        }catch(e){
            unauthorized(e.response.status)
        }
    },
    ProfileSaveRequest:async(PostBody)=>{
       try{
        set({ProfileDetails:null})
        let res=await axios.post(`/api/v1/UpdateProfile`,PostBody)
        return res.data['status']==="success";
       }catch(e){
        unauthorized(e.response.status)
       }
    }
    ,

    RemoveProfileListRequest:async(userID)=>{
        try {
            set({ProfileDetails:null})
            await axios.post(`/api/v1/RemoveProfile`,{"_id":userID});
        }catch (e) {
            // unauthorized(e.response.status)
        }
    },
    WishList:null,
    RemoveWishListRequest:async(productID)=>{
        try {
            set({WishList:null})
            await axios.post(`/api/v1/RemoveWishList`,{"productID":productID});
        }catch (e) {
            unauthorized(e.response.status)
        }
    }

}))
export default UserStore;