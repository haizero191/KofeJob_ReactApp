import React from "react";
import BreadCrumb from "../../../components/user/BreadCrumb/BreadCrumb";
import Ava1 from "../../../assets/images/company/img-1.png";
import Ava2 from "../../../assets/images/company/img-2.png";
import Ava3 from "../../../assets/images/company/img-3.png";
import Ava4 from "../../../assets/images/company/img-4.png";
import Ava5 from "../../../assets/images/company/img-5.png";
import CustomSelect from "../../../components/user/CustomSelect/CustomSelect";
import FilterSide from "../../../components/user/FilterSide/FilterSide";
import "./Project.css";
import ProjectCardView from "../../../components/user/ProjectCardView/ProjectCardView";

const Project = () => {
  const developers = [
    {
      name: "Amaze Tech",
      position: "Full-Time ",
      vote: 5,
      tags: ["HTML", "CSS", "Javascript"],
      salary: "$40 - $500",
      avatar: Ava1,
    },
    {
      name: "Park INC",
      position: "Part-Time",
      vote: 5,
      tags: ["HTML", "CSS", "Javascript"],
      salary: "$40 - $500",
      avatar: Ava2,
    },
    {
      name: "Tech Zone",
      position: "Full-Time",
      vote: 5,
      tags: ["HTML", "CSS", "Javascript"],
      salary: "$40 - $500",
      avatar: Ava3,
    },
    {
      name: "ABC Software ",
      position: "Full-Time",
      vote: 5,
      tags: ["HTML", "CSS", "Javascript"],
      salary: "$40 - $500",
      avatar: Ava4,
    },
    {
      name: "Alfred Tech",
      position: "Full-Time",
      vote: 5,
      tags: ["HTML", "CSS", "Javascript"],
      salary: "$40 - $500",
      avatar: Ava5,
    },
    {
      name: "Kind Software's",
      position: "Full-Time",
      vote: 5,
      tags: ["HTML", "CSS", "Javascript"],
      salary: "$40 - $500",
      avatar: Ava5,
    },
    {
      name: "ABC Software ",
      position: "Full-Time",
      vote: 5,
      tags: ["HTML", "CSS", "Javascript"],
      salary: "$40 - $500",
      avatar: Ava4,
    },
    {
      name: "Alfred Tech",
      position: "Full-Time",
      vote: 5,
      tags: ["HTML", "CSS", "Javascript"],
      salary: "$40 - $500",
      avatar: Ava5,
    },
    {
      name: "Kind Software's",
      position: "Full-Time",
      vote: 5,
      tags: ["HTML", "CSS", "Javascript"],
      salary: "$40 - $500",
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
    <div className="Project">
      <div className="section-bread-crumb">
        <div className="container">
          <BreadCrumb title="Project Grid" page="Project" />
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
                {developers.map((dev, index) => {
                  return (
                    <div className="dev-card" key={dev.name + "_" + index}>
                      <ProjectCardView infomation={dev} />
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

export default Project;
