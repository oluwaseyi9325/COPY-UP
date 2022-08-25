import Image from 'next/image'
import React from 'react'
import SignLeftBanner from './signLeftBanner'

function UserSignUp() {
  return (
    
      
       <div className='row bb'>
          <SignLeftBanner/>

          <div className='col-lg-7 col-md-7 mx-md-auto col-sm-10   py-4 pl-5 pr-3'>
           
             <nav className='text-right'>
                 <div>
                <span><i className='text-muted'> Don’t have an account?  </i></span> <button className='btn btn-md rounded-lg btn-outline-dark ' >Sign Up</button>
                 </div>
             </nav>
             <div className='mt-4'>
               <div className='row'>
                 <div className='col-lg-5 col-md-8 col-sm-9 mx-auto'>
                 <div className=' mt-5'>
                  <div>
                    <h3>Hi, welcome back.</h3>
                    <p className='text-muted'>Please enter your details</p>
                  </div>
                 <div className='mt-3'>
                   <input className='form-control' placeholder='Email' />
                 </div>
                 <div className='mt-4'>
                 <input className='form-control' placeholder='Email' />
               </div>
                 <div className='mt-2' style={{color:"#2036AE"}}>
                <b>Forgot password?</b>
                 </div>
                
                 <button  style={{backgroundColor:'#2036AE'}} className='btn btn-md btn-block rounded-lg text-white mt-3'>Sign in</button>
                 
                 <button   className='btn btn-md rounded-lg btn-block btn-outline-dark'>Sign in with google</button>
                 
    
                 </div>
                 </div>
               </div>
               </div>
          </div>
       </div>
    
  )
}

export default UserSignUp
