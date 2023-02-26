import React, { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import BloodRequestCard from "../BloodRequestCard/BloodRequestCard";
import "./BloodRequests.css";
const BloodRequests = () => {
  useTitle("About Us - Bloodstream");
  const [requests, setRequests] = useState();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/requests`)
      .then((res) => res.json())
      .then((data) => setRequests(data));
  }, []);
  return (
    <div className="my-5" id="blood-requests-container">
      {requests?.length && (
        <h2 className="text-center fw-bold mt-5" id="blood-requests-header">
          BLOOD REQUESTS
        </h2>
      )}
      {requests?.length &&
        requests?.map((request) => (
          <BloodRequestCard
            key={request._id}
            request={request}
          ></BloodRequestCard>
        ))}
    </div>
  );
};

export default BloodRequests;
