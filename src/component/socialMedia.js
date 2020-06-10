import React from "react";
import "../style/css/socialMedia.css";

const socialMedia = () => {
  const handleClick = (e) => {
    // console.log('e.target.className', e.target.className);
    
    if (e.target.className === "fa fa-github") {
     window.open("https://github.com/kagorora", "_blank");
    }
    else if (e.target.className === "fa fa-linkedin") {
      window.open("https://www.linkedin.com/in/kagorora-maxime-70a7b9124/", "_blank");
    }
    else if (e.target.className === "fa fa-facebook-square") {
      window.open("https://web.facebook.com/maxime.kagorora", "_blank");
    } else {
      window.open("https://github.com/kagorora", "_blank");
    }
  };

  return (
    <div className="socialMedia">
      <ul>
        <li>
          <i className="fa fa-github" onClick={handleClick}></i>
          <span className="github">github</span>
        </li>
        <li>
          <i className="fa fa-linkedin" onClick={handleClick}></i>
          <span className="linkedin">linkedin</span>
        </li>
        <li>
          <i className="fa fa-facebook-square" onClick={handleClick}></i>
          <span className="facebook-square">facebook</span>
        </li>
        <li>
          <i className="fa fa-envelope" id="emailIcon" onClick={handleClick}></i>
          <span className="envelope">email</span>
        </li>
      </ul>
    </div>
  );
};

export default socialMedia;
