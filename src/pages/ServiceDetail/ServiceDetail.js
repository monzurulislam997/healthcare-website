import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./serviceDetail.css";
const ServiceDetail = () => {
  const [details, setDetail] = useState([]);
  const { count } = useParams();

  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);
  const findDetail = details.find((detail) => detail.id == count);
  console.log(findDetail);
  return (
    <div className="row text-center mt-5 Service-Detail-div">
      <div className="col-md-6 details">
        <img className="detail-img" src={findDetail?.image} alt="" />
       <div>
           <div>
           <h2>Service Name: {findDetail?.service}</h2>
        <h3>Visiting Charge:{findDetail?.charge}</h3>
        <h4>Depertment age: {findDetail?.experience} years</h4>
        <h6>description:{findDetail?.detail}</h6>
           </div>
       </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
