import React from "react";
import "./Home.css";
import Banner from "../../../components/user/Banner/Banner";
import SectionCategory from "../../../components/user/SectionCategory/SectionCategory";

const Home = () => {
  return (
    <div className="Home">
      {/* Section Banner */}
      <div className="section-banner">
        <div className="container">
          <Banner />
        </div>
      </div>
      <div className="section-banner">
        <div className="container">
          <SectionCategory />
        </div>
      </div>
    </div>
  );
};

export default Home;
