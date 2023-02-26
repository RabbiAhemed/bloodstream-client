import React, { useEffect, useState } from "react";
import BloodRequestCard from "../../components/BloodRequestCard/BloodRequestCard";
import useTitle from "../../hooks/useTitle";
const BloodRequestsPage = () => {
  useTitle("Blood Requests - Bloodstream");
  const [requests, setRequests] = useState();
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/requests`)
      .then((res) => res.json())
      .then((data) => setRequests(data));
  }, []);
  return (
    <div>
      {requests?.length && (
        <div>
          <h2
            className="text-center fw-bold mt-5 text-danger"
            id="blood-requests-header"
          >
            BLOOD REQUESTS
          </h2>
          {requests?.length &&
            requests?.map((request) => (
              <BloodRequestCard
                key={request._id}
                request={request}
              ></BloodRequestCard>
            ))}
        </div>
      )}
    </div>
  );
};

export default BloodRequestsPage;
