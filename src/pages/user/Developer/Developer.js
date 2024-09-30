import React from "react";
import BreadCrumb from "../../../components/user/BreadCrumb/BreadCrumb";
import "./Developer.css";
import Ava1 from "../../../assets/images/user/avatar-1.jpg";
import Ava2 from "../../../assets/images/user/avatar-2.jpg";
import Ava3 from "../../../assets/images/user/avatar-3.jpg";
import Ava4 from "../../../assets/images/user/avatar-4.jpg";
import Ava5 from "../../../assets/images/user/avatar-5.jpg";
import DevCardView from "../../../components/user/DevCardView/DevCardView";
import CustomSelect from "../../../components/user/CustomSelect/CustomSelect";
import FilterSide from "../../../components/user/FilterSide/FilterSide";

const Developer = () => {
  const developers = [
    {
      name: "Richard hendrick",
      position: "Fullstack Developer",
      vote: 5,
      tags: ["Wed design", "System design", "Node js"],
      salary: "$25 Hourly",
      avatar: Ava1,
    },
    {
      name: "Erlich bachman",
      position: "Fullstack Developer",
      vote: 5,
      tags: ["Wed design", "System design", "Node js"],
      salary: "$25 Hourly",
      avatar: Ava2,
    },
    {
      name: "Martin Starr",
      position: "Fullstack Developer",
      vote: 5,
      tags: ["Wed design", "System design", "Node js"],
      salary: "$25 Hourly",
      avatar: Ava3,
    },
    {
      name: "Dinesh Chugtai ",
      position: "Fullstack Developer",
      vote: 5,
      tags: ["Wed design", "System design", "Node js"],
      salary: "$25 Hourly",
      avatar: Ava4,
    },
    {
      name: "Bill gate",
      position: "Fullstack Developer",
      vote: 5,
      tags: ["Wed design", "System design", "Node js"],
      salary: "$25 Hourly",
      avatar: Ava5,
    },
    {
      name: "Bill gate",
      position: "Fullstack Developer",
      vote: 5,
      tags: ["Wed design", "System design", "Node js"],
      salary: "$25 Hourly",
      avatar: Ava5,
    },
    {
      name: "Bill gate",
      position: "Fullstack Developer",
      vote: 5,
      tags: ["Wed design", "System design", "Node js"],
      salary: "$25 Hourly",
      avatar: Ava5,
    },
    {
      name: "Bill gate",
      position: "Fullstack Developer",
      vote: 5,
      tags: ["Wed design", "System design", "Node js"],
      salary: "$25 Hourly",
      avatar: Ava5,
    },
    {
      name: "Bill gate",
      position: "Fullstack Developer",
      vote: 5,
      tags: ["Wed design", "System design", "Node js"],
      salary: "$25 Hourly",
      avatar: Ava5,
    },
  ];


  const options = [
    { value: "option0", label: "All" },
    { value: "option1", label: "Popular" },
    { value: "option2", label: "Relevance" },
    { value: "option3", label: "Rating" },
    { value: "option4", label: "Lastest" },
    { value: "option5", label: "Free" },
  ];

  return (
    <div className="Developer">
      <div className="section-bread-crumb">
        <div className="container">
          <BreadCrumb />
        </div>
      </div>

      <div className="section-dev-list">
        <div className="container">
          <div className="main-flex">
            <div className="filter-side">
                <FilterSide />
            </div>
            <div className="dev-list">
              <div className="dev-list-filter">
                <span>Found 9 Results</span>
                <CustomSelect options={options} placeholder="Sort By" />
              </div>
              <div className="dev-list-inner">
                {developers.map((dev) => {
                  return (
                    <div class="dev-card">
                      <DevCardView infomation={dev} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
