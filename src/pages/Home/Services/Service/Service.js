import React from "react";
import { useHistory } from "react-router";
import "./Service.css";


const Service = (props) => {
  const { service, id, detail, charge, image, experience } = props.service;
  const history = useHistory();
  const serviceDetail = () => {
    history.push(`/detail/${id}`);
  };
  return (
    <div className="col  tf">
      <div className="card service-card">
        <img src={image} alt="" />
        <div className="card-body">
          <h5 className="card-title">{service}</h5>
          <p className="card-text">{detail}</p>
        </div>
        <button onClick={serviceDetail} className="service-btn">
        
          <b>More Details</b> <i class="fas fa-info-circle"></i> 
        </button>
      </div>
    </div>
  );
};

export default Service;
