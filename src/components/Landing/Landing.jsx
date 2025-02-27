"use client";

import { useSelector } from "react-redux";
import SearchingConsultResult from "../SearchResult/Consult/SearchingConsultResult";
import SearchLocationResult from "../SearchResult/SearchLocationResult";
import QuickConsultServiceCard from "./QuickConsultServiceCard";
import SearchBox from "./SearchBox";

const Landing = () => {
  const { selectedService, selectedLocation, serviceDropdown, locationDropdown } = useSelector(
    (state) => state.landingSearch
  );
  const { selectedConsult } = useSelector((state) => state.landingSearch);
  return (
    <div className="">
      <SearchBox />

      {selectedLocation && <SearchLocationResult />}

      {!selectedLocation && <QuickConsultServiceCard />}

      {selectedConsult && !selectedLocation && <SearchingConsultResult />}

      {/* <LandingForm /> */}
    </div>
  );
};

export default Landing;
