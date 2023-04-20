import React from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import "./deposit-withdraw.css";
import { NavLink } from 'react-router-dom';
import qr_code from '../../images/QR-code.jpg'
import ClipboardCopy from "./ClipboardCopy";


const Deposit = () => {
    return(
        <>
        <Navbar/>
           <div className="container-fluid deposit-page">
            <div className="row pt-5 pb-5 ">
              {/* <div className="col-lg-6 col-md-8 col-11 mx-auto form-div p-4" data-aos="fade-down" data-aos-delay="300">
              <h1 className="text-center mb-3" data-aos="fade-down" data-aos-delay="300">Deposit</h1>
              <form action="/deposit" className="form-deposit">
                <input type="text" placeholder="Wallet Address" />
                <input type="number" placeholder="$ Amount" />
                <button type="submit" className="btn btn-blue px-5">Deposit</button>
             </form>
              </div> */}
               {/* <h1 className="text-center my-4" data-aos="fade-up" data-aos-delay="300">OR</h1>
              <div className="col-lg-6 col-md-8 col-11 mx-auto form-div p-4" data-aos="fade-up" data-aos-delay="300">
              <h2 className="text-center mb-3">Scan QR Code to Add Balance</h2>
              <h3 className="text-center">$250</h3>
              <div className="qr-code text-center mx-auto mt-3" data-aos="fade-up" data-aos-delay="300">
                <svg width="250" height="250" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 11h8V3H3v8Zm2-6h4v4H5V5Z"></path>
                  <path d="M3 21h8v-8H3v8Zm2-6h4v4H5v-4Z"></path>
                  <path d="M13 3v8h8V3h-8Zm6 6h-4V5h4v4Z"></path>
                  <path d="M21 19h-2v2h2v-2Z"></path>
                  <path d="M15 13h-2v2h2v-2Z"></path>
                  <path d="M17 15h-2v2h2v-2Z"></path>
                  <path d="M15 17h-2v2h2v-2Z"></path>
                  <path d="M17 19h-2v2h2v-2Z"></path>
                  <path d="M19 17h-2v2h2v-2Z"></path>
                  <path d="M19 13h-2v2h2v-2Z"></path>
                  <path d="M21 15h-2v2h2v-2Z"></path>
                </svg>
              </div>
              </div> */}
              <div className="col-lg-6 col-md-8 col-11 mx-auto form-div p-4" data-aos="fade-up" data-aos-delay="300">
              <h2 className="text-center mb-0">Scan QR code</h2>
              <h3 className="text-center"><span className="small">or</span> <br /> Copy address below to deposit BITCOIN</h3>
              {/* <h3 className="text-center">$250</h3> */}
              <div className="qr-code text-center mx-auto mt-5" 
              data-aos="fade-up" data-aos-delay="300"
              >
                <img height={250} width={250} style={{borderRadius:'10px'}} src={qr_code} alt="" />
              </div>
              <h6>Send only BITCOIN to this address, this address does not support other token.</h6>
              <div className="wallet-address">
                <h2 className="text-center mb-3">Wallet Address</h2>
                <ClipboardCopy copyText="3E7Y4nwCXx7LFxJPoT92zdAb3dbPjceJPk" />
                
              </div>
              </div>


            </div>
            <div className="row mb-4">
              <div className="col-lg-4 col-md-4 col-6 text-center mx-auto">
                <NavLink className='btn-blue w-100 px-5 py-2 fs-large' to="/deposit-proof">Continue</NavLink>
              </div>
            </div>
           </div>
           <Footer/>
        </>
    );
}
export default Deposit;
