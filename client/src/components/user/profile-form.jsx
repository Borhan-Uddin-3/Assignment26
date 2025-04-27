import React,{useEffect} from 'react';
import UserStore from '../../store/UserStore';
import ProfileSkeleton from './../../skeleton/profile-skeleton';
import toast from "react-hot-toast";
import { Link } from 'react-router-dom';

const ProfileForm = () => {

  let {ProfileDetails,ProfileForm,ProfileFormChange,ProfileDetailsRequest,
    ProfileSaveRequest,RemoveProfileListRequest}=UserStore();

    useEffect(() => {
      (async ()=>{
          await ProfileDetailsRequest()
      })()
    }, []);

    const Save = async () => {
      let res= await ProfileSaveRequest(ProfileForm);
      if(res){
          toast.success("Profile Created")
          await ProfileDetailsRequest();
      }
    }

    const Save1 = async () => {
      let res= await ProfileSaveRequest(ProfileForm);
      if(res){
          toast.success("Profile Updated")
          await ProfileDetailsRequest();
      }
    }

    const Save2 = async (userID) => {
      let res= await RemoveProfileListRequest();
      if(res){
          toast.success("Profile delete")
         
      }
    }
 

    if(ProfileDetails===null){
      return <ProfileSkeleton/>
    }else{
      return (
        <div className='container mt-5'>
            <div className='card p-5 rounded-3'>
               <h6> event information</h6>
               <hr/>
               <div className='row mb-4'>
                <div className='col-md-3 p-2'>
                  <label className="form-label">Customer Name </label>
                  <input value={ProfileForm.name} type="text" 
                  onChange={(e)=>{ProfileFormChange('name',e.target.value)}}  className='form-control'/>
                </div>
                <div className='col-md-3 p-2'>
                  <label className="form-label">event_name</label>
                  <input value={ProfileForm.event_name} type="text" 
                  onChange={(e)=>{ProfileFormChange('event_name',e.target.value)}} className='form-control'/>
                </div>
                <div className='col-md-3 p-2'>
                  <label className="form-label">Event Data </label>
                  <input value={ProfileForm.event_data} type="text"  
                  onChange={(e)=>{ProfileFormChange('event_data',e.target.value)}} className='form-control'/>
                </div>
                <div className='col-md-3 p-2'>
                    <label className="form-label">Event Time</label>
                  <input value={ProfileForm.event_time} type="text" 
                  onChange={(e)=>{ProfileFormChange('event_time',e.target.value)}} className='form-control'/>
                </div>
                <div className='col-md-3 p-2'>
                    <label className="form-label">Location </label>
                  <input value={ProfileForm.location} type="text" 
                  onChange={(e)=>{ProfileFormChange('location',e.target.value)}} className='form-control'/>
                </div>
                <div className='col-md-3 p-2'>
                    <label className="form-label">description </label>
                  <input value={ProfileForm.description} type="text" 
                  onChange={(e)=>{ProfileFormChange('description',e.target.value)}} className='form-control'/>
                </div>
              
                
               </div>

  

                <div className="row">
                  <div className='col-md-3 p-2'>
                  <button onClick={Save} className="btn btn-success">Create events</button>
                  </div>
                  <div className='col-md-3 p-2'>
                  <button onClick={Save1} className="btn btn-success">Update events</button>
                  </div>

                  <div className='col-md-3 p-2'>
                  <Link to={'/'} onClick={Save2} className="btn btn-success">Delete events</Link>
                  </div>
                </div>

            </div>
        </div>
    );
    }




};

export default ProfileForm;