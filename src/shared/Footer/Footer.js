import React from 'react';
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

 



const Footer = () => {
    return (


        <div className=" py-2  background px-5 mt-5">
        <div className="row">
          <div className="col mt-5">
          <h3>GET IN TOUCH</h3>
          <h5>House No. N/E (N) 8, Road No. 90, Gulshan 2, 1212 Dhaka, Bangladesh</h5>
          <p>Phone: +101-1231-4321 </p>
      
            <p>  Email: info@educationmaster.com</p>
          </div>
          <div className="col mt-5">
            <h5>DOWNLOAD OUR FREE MOBILE APPS</h5>
            <img src="https://i.ibb.co/Q9X979w/play.png" alt="" />
          </div>
          <div className="col ms-5 mt-5 ">
            <h5>SOCIAL MEDIA</h5>
            <h3><i class="fab fa-facebook"></i> <i class="fab fa-twitter"></i>  <i class="fab fa-instagram"></i>  <i class="fab fa-linkedin"></i></h3>

          </div>
        </div>
      </div>
        // <div className="footer">
        //     <h4 className="text-center"><FontAwesomeIcon icon={faAmbulance} /> All right reserved by iasir arafat riaz @2021 <FontAwesomeIcon icon={faSyringe} /></h4>
        // </div>
    );
};

export default Footer;