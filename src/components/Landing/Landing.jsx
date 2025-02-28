"use client";

import { useSelector } from "react-redux";
import SearchingConsultResult from "../SearchResult/Consult/SearchingConsultResult";
import SearchLocationResult from "../SearchResult/SearchLocationResult";
import QuickConsultServiceCard from "./QuickConsultServiceCard";
import SearchBox from "./SearchBox";

const Landing = () => {
  const { selectedConsult } = useSelector((state) => state.landingSearch);
  const { selectedService, selectedLocation, serviceDropdown, locationDropdown } = useSelector(
    (state) => state.landingSearch
  );

  return (
    <div className="relative">
      <div className="z-50">
        <SearchBox />
      </div>

      <div className="z-0">{selectedLocation && <SearchLocationResult />}</div>

      {!selectedLocation && <QuickConsultServiceCard />}

      {selectedConsult && !selectedLocation && <SearchingConsultResult />}

      {/* <ClinicDetails /> */}

      {/* <LandingForm /> */}
    </div>
  );
};

export default Landing;
