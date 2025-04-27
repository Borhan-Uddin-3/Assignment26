const EmailSend = require('../utils/EmailHelper')
const UserModel = require('../models/UserModel')
const ProfileModel = require('../models/ProfileModel')
const {EncodeToken} =require ('../utils/TokenHelper')


const UserOTPService = async (req)=>{
    try{
        let email = req.params.email;
        let code = Math.floor(100000 + Math.random()*900000);
        let EmailText = `Your Verification code is = ${code}`;
        let EmailSubject = "Email Verification"
        await EmailSend(email,EmailText,EmailSubject);
    
        await UserModel.updateOne({email:email}, {$set:{otp:code}}, {upsert: true})
        return {status: "success", message:"6 DIgit OTP has been send"}
       } catch(e){
        return {status: "success", message:"Something went wrong"}
       }
}

const VerifyOTPService = async (req)=>{

    try{
        let email=req.params.email;
        let otp=req.params.otp;

        // User Count
        let total=await UserModel.find({email:email,otp:otp}).countDocuments('total');
        // return {status: "success", message: total}

        if(total ===1){
            //User Id read
        let user_id = await UserModel.find({email:email, otp:otp}).select('_id');
        //User token create
        let token = EncodeToken(email,user_id[0]['_id'].toString())
        // console.log(token)
        //Otp code update to 0
        await UserModel.updateOne({email:email}, {$set:{otp:"0"}})
        return {status: "success", message: "Valid OTP", token: token}
        } else{
            return {status: "fail", message: "InValid OTP"}
        }
    } catch(e){
        return {status: "fail", message: "InValid OTPs"}
    }

}



const SaveProfileService = async (req)=>{
    try {
        let user_id=req.headers.user_id;
        let reqBody=req.body;
        reqBody.userID=user_id;
        await ProfileModel.updateOne({userID:user_id},{$set:reqBody},{upsert:true})
        return {status:"success", message:"Profile Save Success"}
    }catch (e) {
        return {status:"fail", message:"Something Went Wrong"}
    }
}
const RemoveProfileService = async (req) =>{
    try{
    let user_id = req.headers.user_id;
    let reqBody = req.body;
    reqBody.userID = user_id;
    await ProfileModel.deleteOne(reqBody)
    return {status:"success",message:"Profile Remove Success"}
    } catch(e){
        return {status:"fail",message:"Something Went Wrong !"}
    }
}

const ReadProfileService = async (req)=>{
    try {
        let user_id=req.headers.user_id;
        let result= await ProfileModel.find({userID:user_id})
        return {status:"success", data:result}
    }catch (e) {
        return {status:"fail", message:"Something Went Wrong"}
    }
}

module.exports={
 
    UserOTPService,
    VerifyOTPService,
    SaveProfileService,
    ReadProfileService,
    RemoveProfileService
}