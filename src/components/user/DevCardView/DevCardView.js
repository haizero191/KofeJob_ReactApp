import React from "react"
import "./DevCardView.css"


const DevCardView = ({ infomation }) => {
  return (
    <div className="DevCardView">
      <div className="dev-card-container">
        <div className="box-color"></div>
        <div className="avatar">
          <div className="status">
            <i class="bi bi-check"></i>
          </div>
          <img src={infomation.avatar} alt="avatar" />
        </div>
        <div className="info">
          <p>{infomation.name}</p>
          <p>{infomation.position}</p>
          <p>
            Ho Chi Minh, Viet Nam
          </p>
        </div>
        <div className="voting">
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill"></i>
          <i class="bi bi-star-fill grey"></i>
        </div>
        <div className="tags">
          {infomation.tags.map((tag) => {
            return <div className="tag">{tag}</div>;
          })}
        </div>
        <div className="salary">
          <h4>{infomation.salary}</h4>
        </div>
        <button className="invite">Invite</button>
        <button className="view-profile">View profile</button>
      </div>
    </div>
  );
};

export default DevCardView;
