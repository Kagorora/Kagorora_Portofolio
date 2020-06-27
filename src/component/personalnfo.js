import React from "react";
import maxime from "../style/images/maxime.png";

const personalInfo = () => {
  return (
    <div id="PersonalInfo">
      <div className="bio">
        <span className="DescriptionTitle">
          <p className="UIheader">UI/UX Fronted Dev</p>
        </span>
        <p className="UIdescription">
          <span id="maximeName">Kagorora</span> Enjoys building beautiful user
          interfaces that are easy to interact with and he is always looking for
          client satisfaction while they are experiencing his work. Don't hesitate to reach
          out, We can make your clients more pleased with your products!
        </p>
      </div>
      <div className="bio2">
        <span className="DescriptionTitle2">
          <p className="BACKENDHeader">Programmer / Backend</p>
        </span>
        <p className="BACKENDdescription">I am always open to work on meaningful projects
        either independent or open source projects that affect positively people's lives.
        If interested with work with me, please feel free to reach out!
        </p>
      </div>
      <div className="imageSide">
        <div className="image">
          <div className="element" id="element"></div>
          
          <img src={maxime} alt="user profile" className="avatar--small" />
        </div>
      </div>
    </div>
  );
};

export default personalInfo;
