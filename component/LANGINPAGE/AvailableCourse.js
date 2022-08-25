import React from 'react'
import Image from "next/Image"
import Link from 'next/link'

function AvailableCourse() {
  return (
    <div className='container bg-info'>
    
    <div className='container'>
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
            
     
      <div className="row ml-">
         
      
                 {
                   [1,2,3].map((val)=>{
                    return(
                      <div className="col-lg-4 col-md-6 col-sm-6 mt-5 box" >
                      <div className="card shadow card-width" style={{borderRadius:"20px"}}>
                       <Image
                          className="card-img-top"
                          src={require("../../asset/img1.png")}
                         
                          width={200}
                          height={160}
                  />
                        <div
                          className="text-center text-muted  card-text mr-0"
                          style={{ marginTop: "-30px" }}
                        >
                          <section className="row">
                            <div className="col-5">
                              <span
                                className=" p-2"
                                style={{ backgroundColor: "whitesmoke" }}
                              >
                                <i className="bi bi-hand-thumbs-up"></i> Like
                                <span className="badge badge-info">10</span>
                              </span>
                            </div>
                            <div className="col-7 ">
                              <span
                                className=" p-2"
                                style={{ backgroundColor: "whitesmoke" }}
                              >
                                <i className="bi bi-chat-left"></i>
                                <span> Comment</span>
                                <span className="badge badge-info">10</span>
                              </span>
                            </div>
                          </section>
                        </div>
            
                        <div className="card-body mt-1">
                          <h5 className="card-title">The Strategy of Content Marketing</h5>
                          <p className="card-text ">
                            <Link href="/">
                              <a className='text-muted'>
                              Learn the core strategies content marketers use to acquire and retain customers profitably.
                              </a>
                            </Link>
                          </p>
                            <div>
                            John Mitchell
                            </div>

                            <div className=''>
                              
                             <span><i class="bi bi-book-half"></i> 6 modules</span>
                             <span className='ml-2'><i class="bi bi-clock-fill"></i> 6 hours</span>

                            </div>
                        </div>
                      </div>
                    </div>
                    )
                   })
                 }
            
    

    

    
    </div>




    <div className="row mt-4 ">
         
      
    {
      [1,2,3].map((val)=>{
       return(
         <div className="col-lg-4 col-md-6 col-sm-6 mt-5 box">
         <div className="card shadow card-width">
          <Image
             className="card-img-top"
             src={require("../../asset/img1.png")}
            
             width={200}
             height={160}
     />
           <div
             className="text-center text-muted  card-text mr-0"
             style={{ marginTop: "-30px" }}
           >
             <section className="row">
               <div className="col-5">
                 <span
                   className=" p-2"
                   style={{ backgroundColor: "whitesmoke" }}
                 >
                   <i className="bi bi-hand-thumbs-up"></i> Like
                   <span className="badge badge-info">10</span>
                 </span>
               </div>
               <div className="col-7 ">
                 <span
                   className=" p-2"
                   style={{ backgroundColor: "whitesmoke" }}
                 >
                   <i className="bi bi-chat-left"></i>
                   <span> Comment</span>
                   <span className="badge badge-info">10</span>
                 </span>
               </div>
             </section>
           </div>

           <div className="card-body mt-1">
             <h5 className="card-title">dsgdghads</h5>
             <p className="card-text ">
               <Link href="/">
                 <a>
                    sdhfhsdjf sfjshajs
                 </a>
               </Link>
             </p>
             <Link href="/contact">
               <a
                 style={{
                   border: "2px solid lightgrey",
                   backgroundColor: "whitesmoke",
                 }}
                 className="btn  btn-sm btn-outlined"
               >
                 Read More...
               </a>
             </Link>
           </div>
         </div>
       </div>
       )
      })
    }






</div>



      </div>
      <div class="carousel-item">
         sadhhasdads
      </div>
      <div class="carousel-item">
        asdhasdhashd
      </div>
    </div>
    <a class="carousel-control-prev btn btn-danger" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next btn btn-danger" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
    
    </div>
    
    
    </div>
  )
}

export default AvailableCourse