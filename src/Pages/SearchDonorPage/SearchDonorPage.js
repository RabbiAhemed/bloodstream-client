import React, { useEffect } from "react";
import SearchDonor from "../../components/SearchDonor/SearchDonor";
import useTitle from "../../hooks/useTitle";

const SearchDonorPage = () => {

  useTitle("Search Donors - Bloodstream");
  return (
    <div>
      <SearchDonor></SearchDonor>
    </div>
  );
};

export default SearchDonorPage;
