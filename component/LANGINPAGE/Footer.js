import React from 'react'
import footerImg from "../../asset/footerImg.png"
import Image from "next/Image"

function Footer() {
  return (
      // the footer Component
    <div className='mt-5' style={{backgroundColor:' #F5F5F5'}}>
         <div className='container p-5'>
         <div className='row mb-3'>
         <div className='col-lg-6 col-md-6 col-sm-7'>
            <div>
             <Image src={footerImg} />
            <div className='text-muted' style={{ letterSpacing: "30px" }}>
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-youtube"></i>
            <i className="bi bi-instagram"></i>
          </div>
            </div>
         </div>
         <div className='col-lg-6 col-md-6 col-sm-7'>
            <div className='text-right text-muted'>
            <div >
            <span className="ml-4">About us</span>
            <span className="ml-4">Support</span>
            <span className="ml-4">Privacy</span>
          </div>
            </div>
         </div>
      </div>
         <hr  />
         <div className='row mt-2 text-muted'>
         <div className='col-6'>@ 2022 CopyUp</div>
         <div className='col-6 text-right'>All Right Reserved</div>
         </div>
         </div>
    </div>
  )
}

export default Footer