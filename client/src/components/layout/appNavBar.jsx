import React,{useEffect}  from 'react';
import {Link,useNavigate} from 'react-router-dom'
import logo from "../../assets/images/plainb-logo.svg"
import ProductStore from '../../store/ProductStore';
import UserStore from './../../store/UserStore';
import UserSubmitButton from './../user/UserSubmitButton';



const AppNavBar = () => {
 
    const navigate=useNavigate()

    const {isLogin,UserLogoutRequest}=UserStore();
    

    const onLogout=async()=>{
        await UserLogoutRequest()
        sessionStorage.clear();
        localStorage.clear();
        navigate('/')
    }


    return (
        <>

<div className="container-fluid text-white p-2 bg-success">
    <div className="container">
        <div className="row justify-content-around">
            <div className="col-md-6">
                <span>
                    <span className="f-12"><i className="bi bi-envelope"></i>       
                      Support@PlanB.com </span>
                    <span className="f-12 mx-2"><i className="bi bi-envelope"></i>  
                     01774688159 </span>
                </span>
            </div>
            <div className="col-md-6">
                <span className="float-end">
                  <span className="bodySmall mx-2"><i className="bi bi-whatsapp"></i>
                    </span>
                    <span className="bodySmall mx-2"><i className="bi bi-youtube"></i>
                    </span>
                  <span className="bodySmall mx-2"><i className="bi bi-facebook"></i>
                   </span>
                </span>
            </div>
        </div>
    </div>
</div> 

{/* Navbar part  */}

<nav className='navbar sticky-top shadow-sm bg-white navbar-expand-lg navbar-light m-0 py-3'>
    <div className='container'>

       <Link className="navbar-brand" to="/">
       <img className='img-fluid' src={logo} alt="" width='96px' />
       </Link>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
        data-bs-target="#nav06" aria-controls="nav06" aria-expanded="false" aria- 
        label="Toggle navigation"><span className="navbar-toggler-icon"></span> 
        </button>
        <div className="collapse navbar-collapse" id="nav06">
            <ul className="navbar-nav mt-3 mt-lg-0 mb-3 mb-lg-0 ms-lg-3">
            <span className="nav-item me-4">
            <Link className="btn ms-2 btn-light position-relative" to="/"><i className="bi bi-house"></i> Home</Link>
           
            </span>
            </ul>
        </div>
   

        {
            isLogin()?(
                <>
                
                <UserSubmitButton onClick={onLogout} text="Logout" className="btn ms-3 btn-success d-flex">LogOut</UserSubmitButton>
                <Link type="button" className="btn ms-3 btn-success d-flex" 
                to="/profile">Profile</Link>
                </>
            ):(
                <Link type="button" className="btn ms-3 btn-success d-flex" 
                to="/login">Login</Link>
              
            )
        }

    
        
        

    </div>
</nav>






        </>
    );
};

export default AppNavBar;