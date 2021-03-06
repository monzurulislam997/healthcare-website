import React, { useEffect, useState } from "react";
import Service from "./Service/Service";
import "./Services.css"
// const service =[
//     {id:1, service: "Orthopedics", detail:"Orthopaedic surgery or orthopaedics, is the branch of surgery concerned with conditions involving the musculoskeletal system. we have special expert", charge:20, image:"https://i.ibb.co/T8Km4RQ/ortho.png" ,experience:8},
//     {id:2, service: "Pharmacy", detail:"We have Hospital pharmacy and clinical pharmacy, all local and famous drag are available here, our first piority is provide to you very food support", charge:10, image:"https://i.ibb.co/9NVt8GK/farm.png" ,experience:15},
//     {id:3, service: "Cardiology", detail:"Our Cardiology  has gained reputation for its dynamic and innovation in the diagnosis, investigation and treatment of patients with all forms of heart diseases", charge:25, image:"https://i.ibb.co/bdkgNRN/card.png" ,experience:12},
//     {id:4, service: "Neurology", detail:"Medic-Nucleus offers the latest in neurological care with innovative therapies, new techniques and clinical trials developed by our world-class experts", charge:30, image:"https://i.ibb.co/tQMYBdj/neuro.png" ,experience:17},
//     {id:5, service: "Dental", detail:"The Medic-Nucleus in Dhaka We are here to help you with your teeth. Call us! We provide you with the best Endodontic care in a professional and compassionate manner.", charge:12, image:"https://i.ibb.co/HKXTZjn/dent.png" ,experience:11},
//     {id:6, service: "Psychology", detail:"Medic-Nucleus has Licensed Professional Counselors Available Anytime, Anywhere You Need Them. The Time is Now to Put Yourself First and Make A Positive Change. Get Started Today! ", charge:10, image:"https://i.ibb.co/61XSLW7/psy.png" ,experience:8}
// ]

const Services = () => {
  const [services, setService] = useState([]);
  useEffect(() => {
    fetch("./services.json")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  // console.log(services);
  return (
    <div className="services">
        <h1 className="text-center text-danger m-5" >Our Special Services</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4 services-div">
     
            {
                services.map(service=> <Service key={service.id} service={service}></Service>)
            }
      
      </div>
    </div>
  );
};

export default Services;
