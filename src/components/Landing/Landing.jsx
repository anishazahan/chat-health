import SearchingConsultResult from "../SearchResult/Consult/SearchingConsultResult";
import QuickConsultServiceCard from "./QuickConsultServiceCard";
import SearchBox from "./SearchBox";

const Landing = () => {
  return (
    <div className="">
      <SearchBox />
      {/* <SearchResult /> */}
      <QuickConsultServiceCard />
      <SearchingConsultResult />
      {/* <LandingForm /> */}
    </div>
  );
};

export default Landing;
