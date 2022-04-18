import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './SocialLogin.css'
import {FcGoogle} from 'react-icons/fc'
import {AiFillGithub} from 'react-icons/ai'

import auth from '../../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuthState, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';


const SocialLogin = () => {
    const [Error,setError]=useState('')
    const navigate=useNavigate()
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    
   
    //  ========================logIn with Google start====================
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    
    
   

    

    if (error || error1) {
       setError( error?.message)
       setError( error1?.message) 

    }
    
    if (user || user1) {
     
        navigate(from, { replace: true });
    }


//  ========================logIn with Google end====================
    return (
        <>
        <div  className='d-flex justify-content-center align-items-center '>
        <div className="Line mx-4"></div>
        <h2>Or</h2>
        <div className="Line mx-4"></div>
        </div>
       <p>{Error}</p>
        <div>
        <Button  onClick={() => signInWithGoogle()} className='socialButton mx-auto d-block' variant="white" type="submit">
   <FcGoogle className='Social-icon'></FcGoogle> Sign in With Google
  </Button>
        <Button onClick={()=>signInWithGithub()}  className='socialButton mx-auto d-block' variant="white" type="submit">
   <AiFillGithub className='Social-icon'></AiFillGithub> Sign in With GitHub
  </Button>
  </div>
        </>
    );
};

export default SocialLogin;