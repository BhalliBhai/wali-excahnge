import React, {useState} from "react";
import "./styles/profile.css";
import profile_bg from "../images/candle-chart.jpg"
import { Link } from "react-router-dom";
import profile_img from "../images/profile.jpg";
import History from "../components/deposit-withdraw/History";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const Profile = () => {

   const [profileImage, setProfileImage] = useState("https://via.placeholder.com/150");
  
    const handleProfileImageChange = (e) => {
      const newImage = URL.createObjectURL(e.target.files[0]);
      setProfileImage(newImage);
    };


     return(
        <>
         <Navbar/>
           <div className="profile-page">
            <div className="container-fluid">
               <div className="row mt-5">
                  <div className="col-lg-4 col-md-5 col-12 mb-3">
                            {/* <!--Profile Card--> */}
                     
                        <div class="card profile-card-3" data-aos="fade-up" data-aos-delay="300">
                           <div class="background-block">
                                 <img src={profile_bg} alt="profile-sample1" class="background"/>
                           </div>
                           <div className="profile-thumb-block">
                           <img 
                           src={profileImage} 
                           alt="profile" className="profile" />
                              <span className="input-container">
                                 <label htmlFor="profile">
                                 <svg width={25} height={25} fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.523 5.208a.6.6 0 0 1 0 .847L19.27 7.308l-2.4-2.4 1.252-1.253a.6.6 0 0 1 .848 0l1.552 1.552v.001Zm-2.1 2.947-2.4-2.4-8.176 8.177a.6.6 0 0 0-.145.235l-.966 2.897a.3.3 0 0 0 .38.38l2.896-.967a.6.6 0 0 0 .235-.144l8.176-8.178Z" />
                                    <path fillRule="evenodd" d="M3.12 19.08a1.8 1.8 0 0 0 1.8 1.8h13.2a1.8 1.8 0 0 0 1.8-1.8v-7.2a.6.6 0 1 0-1.2 0v7.2a.6.6 0 0 1-.6.6H4.92a.6.6 0 0 1-.6-.6V5.88a.6.6 0 0 1 .6-.6h7.8a.6.6 0 1 0 0-1.2h-7.8a1.8 1.8 0 0 0-1.8 1.8v13.2Z" clipRule="evenodd" />
                                 </svg>
                                 </label>
                                 <input className="d-none" id="profile"   type="file"
                                 accept="image/*"
                                 onChange={handleProfileImageChange}/>
                              </span>
                           </div>
                           <div class="card-content">
                              <h2>Justin Mccoy</h2>
                              <p>Current Balance: <strong>$1500</strong></p>
                           </div>
                        </div>
            
                  </div>
                      {/* Account Details */}
                  <div className="col-lg-8 col-md-7 col-12 mb-3" >
                     <h2 className="text-blue text-center" data-aos="fade-down" data-aos-delay="300">Account Details</h2>
                     <div className="row account-details" data-aos="fade-left" data-aos-delay="300">
                        <div className="col-6">
                          <h5>Balance: <strong>$1500</strong></h5>
                          <h5>Total Spent: <strong>$3500</strong></h5>
                          <h5>Total Profit: <strong>$1800</strong></h5>
                          <h5>Last Deposit: <strong className="text-success">$300</strong></h5>
                          <h5>Last Withdrawn: <strong className="text-danger">$700</strong></h5>
                        </div>

                        <div className="col-6 text-end">
                          <h5>Current Plan: <strong className="text-success">Pro</strong> <span className="small">(Monthly) </span></h5>
                          <h5>Plan Limit: <strong>$100 to $10,000</strong></h5>
                          <h5>Current Trade: <strong>$500</strong></h5>
                          <h5>Running Profit: <strong>$100</strong></h5>
                          <h5>Last Deposit: <strong>$300</strong></h5>
                        </div>
                     </div>
                     <div className="d-flex text-align-middle profile-links justify-content-between">
                           <div className="col-lg-2 col-md-4 col-4 py-2 text-center">
                           <Link className="btn-blue" to={"/deposit"}>Deposit</Link>
                           </div>
                           <div className="col-lg-2 col-md-4 col-4 py-2 text-center" >
                           <Link className="btn-blue" to={"/withdraw"}>Withdraw</Link>
                           </div>
                           <div className="col-lg-2 col-md-4 col-4 py-2 text-center">
                           <Link className="btn-blue" to={"/history"}>History</Link>
                           </div>
                           <div className="col-lg-2 col-md-4 col-4 py-2 text-center" >
                           <Link className="btn-blue" to={"/plans"}>Plans</Link>
                           </div>
                           <div className="col-lg-2 col-md-4 col-4 py-2 text-center">
                           <Link className="btn-blue" to={"/help"}>Help</Link>
                           </div>
                           
                        </div>
                  </div>
               </div>
            </div>
           </div>
         <Footer/>
        </>
        
     );
}

export default Profile;